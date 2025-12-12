/**
 * Upload all files from /public to Supabase Storage
 *
 * Usage: node scripts/upload-to-supabase.js
 *
 * Make sure to set these environment variables:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - SUPABASE_SERVICE_ROLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)
 * - NEXT_PUBLIC_SUPABASE_BUCKET
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

// Configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'photos';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAPPING_FILE = path.join(__dirname, '..', 'url-mapping.json');

// Skip only system/temp files
const SKIP_EXTENSIONS = ['.ini', '.DS_Store'];
const SKIP_FOLDERS = ['node_modules', '.git'];

// MIME types
const MIME_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.mov': 'video/quicktime',
  '.avi': 'video/x-msvideo',
  '.mkv': 'video/x-matroska',
  '.pdf': 'application/pdf',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon',
  '.nef': 'image/x-nikon-nef',
  '.heic': 'image/heic',
  '.heif': 'image/heif',
  '.raw': 'image/raw',
  '.cr2': 'image/x-canon-cr2',
  '.arw': 'image/x-sony-arw',
};

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Get all files recursively
async function getAllFiles(dir, baseDir = dir) {
  const files = [];
  const items = await readdir(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(baseDir, fullPath);

    // Skip certain folders
    if (SKIP_FOLDERS.some(skip => relativePath.includes(skip))) {
      continue;
    }

    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      const subFiles = await getAllFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else {
      const ext = path.extname(item).toUpperCase();

      // Skip certain file types
      if (SKIP_EXTENSIONS.includes(ext)) {
        console.log(`Skipping: ${relativePath} (${ext})`);
        continue;
      }

      files.push({
        fullPath,
        relativePath: relativePath.replace(/\\/g, '/'), // Normalize to forward slashes
        size: stats.size,
      });
    }
  }

  return files;
}

// Get MIME type for a file
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

// Upload a single file
async function uploadFile(file, retries = 3) {
  const { fullPath, relativePath } = file;
  const mimeType = getMimeType(fullPath);

  // Read file content
  const content = await readFile(fullPath);

  // Upload to Supabase
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(relativePath, content, {
          contentType: mimeType,
          upsert: true, // Overwrite if exists
        });

      if (error) {
        if (attempt === retries) {
          throw error;
        }
        console.log(`  Retry ${attempt}/${retries} for ${relativePath}: ${error.message}`);
        await new Promise(r => setTimeout(r, 1000 * attempt)); // Exponential backoff
        continue;
      }

      return {
        oldPath: `/${relativePath}`,
        newUrl: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${relativePath}`,
      };
    } catch (err) {
      if (attempt === retries) {
        throw err;
      }
    }
  }
}

// Main upload function
async function main() {
  console.log('='.repeat(60));
  console.log('Supabase Public Folder Upload Script');
  console.log('='.repeat(60));
  console.log(`\nSupabase URL: ${SUPABASE_URL}`);
  console.log(`Bucket: ${BUCKET_NAME}`);
  console.log(`Source: ${PUBLIC_DIR}\n`);

  // Get all files
  console.log('Scanning files...');
  const files = await getAllFiles(PUBLIC_DIR);

  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  console.log(`Found ${files.length} files (${(totalSize / 1024 / 1024).toFixed(2)} MB)\n`);

  // Upload files
  const urlMapping = {};
  let uploaded = 0;
  let failed = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const progress = `[${i + 1}/${files.length}]`;

    try {
      process.stdout.write(`${progress} Uploading: ${file.relativePath}... `);
      const result = await uploadFile(file);
      urlMapping[result.oldPath] = result.newUrl;
      uploaded++;
      console.log('✓');
    } catch (err) {
      console.log(`✗ ${err.message}`);
      failed++;
    }

    // Small delay to avoid rate limiting
    if (i % 10 === 0) {
      await new Promise(r => setTimeout(r, 100));
    }
  }

  // Save URL mapping
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(urlMapping, null, 2));

  console.log('\n' + '='.repeat(60));
  console.log('Upload Complete!');
  console.log('='.repeat(60));
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Failed: ${failed}`);
  console.log(`\nURL mapping saved to: ${MAPPING_FILE}`);
  console.log('\nNext step: Run "node scripts/update-urls.js" to update the codebase');
}

main().catch(console.error);
