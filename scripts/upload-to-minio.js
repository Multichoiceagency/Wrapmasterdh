/**
 * Upload all files from /public to MinIO Storage
 *
 * Usage: node scripts/upload-to-minio.js
 */

const Minio = require('minio');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

require('dotenv').config({ path: '.env.local' });

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration
const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT;
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY;
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY;
const BUCKET_NAME = process.env.MINIO_BUCKET || 'wrapmaster';
const USE_SSL = process.env.MINIO_USE_SSL === 'true';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAPPING_FILE = path.join(__dirname, '..', 'url-mapping.json');

// Skip system files
const SKIP_FILES = ['.DS_Store', 'desktop.ini', 'Thumbs.db'];
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

if (!MINIO_ENDPOINT || !MINIO_ACCESS_KEY || !MINIO_SECRET_KEY) {
  console.error('Missing MinIO credentials. Check .env.local');
  process.exit(1);
}

// Create MinIO client
const minioClient = new Minio.Client({
  endPoint: MINIO_ENDPOINT,
  port: USE_SSL ? 443 : 80,
  useSSL: USE_SSL,
  accessKey: MINIO_ACCESS_KEY,
  secretKey: MINIO_SECRET_KEY,
});

// Get all files recursively
async function getAllFiles(dir, baseDir = dir) {
  const files = [];
  const items = await readdir(dir);

  for (const item of items) {
    // Skip system files
    if (SKIP_FILES.includes(item)) continue;

    const fullPath = path.join(dir, item);
    const relativePath = path.relative(baseDir, fullPath);

    // Skip certain folders
    if (SKIP_FOLDERS.some(skip => relativePath.includes(skip))) continue;

    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      const subFiles = await getAllFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else {
      files.push({
        fullPath,
        relativePath: relativePath.replace(/\\/g, '/'),
        size: stats.size,
      });
    }
  }

  return files;
}

// Get MIME type
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

// Upload a single file
async function uploadFile(file, retries = 3) {
  const { fullPath, relativePath } = file;
  const contentType = getMimeType(fullPath);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await minioClient.fPutObject(BUCKET_NAME, relativePath, fullPath, {
        'Content-Type': contentType,
      });

      const protocol = USE_SSL ? 'https' : 'http';
      return {
        oldPath: `/${relativePath}`,
        newUrl: `${protocol}://${MINIO_ENDPOINT}/${BUCKET_NAME}/${relativePath}`,
      };
    } catch (err) {
      if (attempt === retries) throw err;
      console.log(`\n  Retry ${attempt}/${retries}: ${err.message}`);
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
}

// Main function
async function main() {
  console.log('='.repeat(60));
  console.log('MinIO Public Folder Upload Script');
  console.log('='.repeat(60));
  console.log(`\nEndpoint: ${MINIO_ENDPOINT}`);
  console.log(`Bucket: ${BUCKET_NAME}`);
  console.log(`SSL: ${USE_SSL}`);
  console.log(`Source: ${PUBLIC_DIR}\n`);

  // Check if bucket exists, create if not
  console.log('Checking bucket...');
  const bucketExists = await minioClient.bucketExists(BUCKET_NAME);

  if (!bucketExists) {
    console.log(`Creating bucket "${BUCKET_NAME}"...`);
    await minioClient.makeBucket(BUCKET_NAME);

    // Set bucket policy to public
    const policy = {
      Version: '2012-10-17',
      Statement: [{
        Effect: 'Allow',
        Principal: { AWS: ['*'] },
        Action: ['s3:GetObject'],
        Resource: [`arn:aws:s3:::${BUCKET_NAME}/*`],
      }],
    };
    await minioClient.setBucketPolicy(BUCKET_NAME, JSON.stringify(policy));
    console.log('Bucket created and set to public!');
  } else {
    console.log('Bucket exists!');
  }

  // Get all files
  console.log('\nScanning files...');
  const files = await getAllFiles(PUBLIC_DIR);

  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  console.log(`Found ${files.length} files (${(totalSize / 1024 / 1024).toFixed(2)} MB)\n`);

  // Upload files
  const urlMapping = {};
  let uploaded = 0;
  let failed = 0;
  const startTime = Date.now();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const progress = `[${i + 1}/${files.length}]`;

    try {
      process.stdout.write(`${progress} ${file.relativePath}... `);
      const result = await uploadFile(file);
      urlMapping[result.oldPath] = result.newUrl;
      uploaded++;
      console.log('✓');
    } catch (err) {
      console.log(`✗ ${err.message}`);
      failed++;
    }
  }

  // Save URL mapping
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(urlMapping, null, 2));

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log('\n' + '='.repeat(60));
  console.log('Upload Complete!');
  console.log('='.repeat(60));
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Failed: ${failed}`);
  console.log(`Duration: ${duration} minutes`);
  console.log(`\nURL mapping saved to: ${MAPPING_FILE}`);
  console.log('\nPublic URL format:');
  console.log(`  https://${MINIO_ENDPOINT}/${BUCKET_NAME}/[path]`);
  console.log('\nNext step: Run "node scripts/update-urls.js" to update the codebase');
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
