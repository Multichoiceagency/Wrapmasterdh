const { Client } = require('minio');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const minioClient = new Client({
  endPoint: process.env.MINIO_ENDPOINT?.replace('https://', '').replace('http://', '') || '',
  port: 443,
  useSSL: true,
  accessKey: process.env.MINIO_ACCESS_KEY || '',
  secretKey: process.env.MINIO_SECRET_KEY || '',
});

const BUCKET = process.env.MINIO_BUCKET || 'wrapmaster';

async function uploadLogo() {
  const logoPath = path.join(__dirname, '..', 'public', 'logos', 'handtekening-wit.png');

  if (!fs.existsSync(logoPath)) {
    console.error('Logo file not found:', logoPath);
    process.exit(1);
  }

  const objectName = 'logos/handtekening-wit.png';

  try {
    // Check if bucket exists
    const exists = await minioClient.bucketExists(BUCKET);
    if (!exists) {
      console.error('Bucket does not exist:', BUCKET);
      process.exit(1);
    }

    // Upload the file
    const fileStream = fs.createReadStream(logoPath);
    const stat = fs.statSync(logoPath);

    await minioClient.putObject(BUCKET, objectName, fileStream, stat.size, {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    });

    const publicUrl = `https://${process.env.MINIO_ENDPOINT?.replace('https://', '').replace('http://', '')}/${BUCKET}/${objectName}`;

    console.log('Logo uploaded successfully!');
    console.log('Public URL:', publicUrl);
  } catch (error) {
    console.error('Upload failed:', error);
    process.exit(1);
  }
}

uploadLogo();
