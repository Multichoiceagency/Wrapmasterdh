/**
 * Convert ALL local asset URLs to MinIO URLs
 *
 * This script finds all local paths like /images/*, /enes-website/*, /video/*, etc.
 * and converts them to MinIO URLs.
 *
 * Usage: node scripts/convert-all-urls-to-minio.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

require('dotenv').config({ path: '.env.local' });

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// MinIO configuration
const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || 'minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io';
const MINIO_BUCKET = process.env.MINIO_BUCKET || 'wrapmaster';
const USE_SSL = process.env.MINIO_USE_SSL === 'true';
const MINIO_BASE_URL = `${USE_SSL ? 'https' : 'http'}://${MINIO_ENDPOINT}/${MINIO_BUCKET}`;

// Configuration
const PROJECT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_DIR, 'public');

// Files/folders to scan
const SCAN_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'];
const SKIP_FOLDERS = ['node_modules', '.git', '.next', 'public', 'scripts'];

// Folders in /public that should be converted
const PUBLIC_FOLDERS = [
  'enes-website',
  'images',
  'video',
  'wallpapers',
  'logos',
  'uploads',
];

// Get all files in public directory to build a valid file list
async function getPublicFiles(dir, baseDir = dir) {
  const files = new Set();

  try {
    const items = await readdir(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = '/' + path.relative(baseDir, fullPath).replace(/\\/g, '/');

      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        const subFiles = await getPublicFiles(fullPath, baseDir);
        subFiles.forEach(f => files.add(f));
      } else {
        files.add(relativePath);
      }
    }
  } catch (err) {
    // Ignore errors
  }

  return files;
}

// Get all source files recursively
async function getAllSourceFiles(dir) {
  const files = [];
  const items = await readdir(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(PROJECT_DIR, fullPath);

    // Skip certain folders
    if (SKIP_FOLDERS.some(skip => relativePath.startsWith(skip))) {
      continue;
    }

    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      const subFiles = await getAllSourceFiles(fullPath);
      files.push(...subFiles);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (SCAN_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

// Update URLs in a file
async function updateFile(filePath, publicFiles) {
  let content = await readFile(filePath, 'utf8');
  let originalContent = content;
  let replacements = 0;

  // Pattern to match local paths: "/folder/...", '/folder/...', `/folder/...`
  // where folder is one of our public folders
  const folderPattern = PUBLIC_FOLDERS.join('|');

  // Match quoted paths (relative paths starting with /)
  const patterns = [
    // Double quotes
    new RegExp(`"(/(${folderPattern})/[^"]+)"`, 'g'),
    // Single quotes
    new RegExp(`'(/(${folderPattern})/[^']+)'`, 'g'),
    // Backticks
    new RegExp(`\`(/(${folderPattern})/[^\`]+)\``, 'g'),
  ];

  for (const pattern of patterns) {
    content = content.replace(pattern, (match, localPath) => {
      // Check if file exists in public directory
      const exists = publicFiles.has(localPath);

      // Convert to MinIO URL
      const minioUrl = `${MINIO_BASE_URL}${localPath}`;

      // Preserve the quote type
      const quote = match[0];
      replacements++;

      return `${quote}${minioUrl}${quote}`;
    });
  }

  // Also match full localhost URLs: http://localhost:3010/uploads/...
  const localhostPatterns = [
    // Double quotes - http://localhost:3010/uploads/...
    /"http:\/\/localhost:3010\/uploads\/([^"]+)"/g,
    // Single quotes
    /'http:\/\/localhost:3010\/uploads\/([^']+)'/g,
    // Backticks
    /`http:\/\/localhost:3010\/uploads\/([^`]+)`/g,
  ];

  for (const pattern of localhostPatterns) {
    content = content.replace(pattern, (match, relativePath) => {
      // Convert to MinIO URL - the path after /uploads/ goes directly to MinIO
      const minioUrl = `${MINIO_BASE_URL}/${relativePath}`;

      // Preserve the quote type
      const quote = match[0];
      replacements++;

      return `${quote}${minioUrl}${quote}`;
    });
  }

  // Only write if changes were made
  if (content !== originalContent) {
    await writeFile(filePath, content, 'utf8');
    return replacements;
  }

  return 0;
}

// Main function
async function main() {
  console.log('='.repeat(60));
  console.log('Convert All URLs to MinIO');
  console.log('='.repeat(60));
  console.log(`\nMinIO Base URL: ${MINIO_BASE_URL}`);
  console.log(`Project: ${PROJECT_DIR}\n`);

  // Get list of public files
  console.log('Scanning public directory...');
  const publicFiles = await getPublicFiles(PUBLIC_DIR);
  console.log(`Found ${publicFiles.size} files in public/\n`);

  // Get all source files
  console.log('Scanning source files...');
  const files = await getAllSourceFiles(PROJECT_DIR);
  console.log(`Found ${files.length} source files\n`);

  // Update each file
  let totalReplacements = 0;
  let filesModified = 0;

  for (const file of files) {
    const relativePath = path.relative(PROJECT_DIR, file);
    const replacements = await updateFile(file, publicFiles);

    if (replacements > 0) {
      console.log(`Updated ${relativePath}: ${replacements} replacement(s)`);
      totalReplacements += replacements;
      filesModified++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Conversion Complete!');
  console.log('='.repeat(60));
  console.log(`Files modified: ${filesModified}`);
  console.log(`Total replacements: ${totalReplacements}`);
  console.log(`\nMinIO URL format: ${MINIO_BASE_URL}/[path]`);
}

main().catch(console.error);
