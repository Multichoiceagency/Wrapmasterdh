/**
 * Create the storage bucket in Supabase
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'photos';

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  console.log('Supabase URL:', SUPABASE_URL);
  console.log('Bucket name:', BUCKET_NAME);
  console.log('');

  // List existing buckets
  console.log('Listing existing buckets...');
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();

  if (listError) {
    console.error('Error listing buckets:', listError.message);
  } else {
    console.log('Existing buckets:', buckets.map(b => b.name).join(', ') || '(none)');
  }

  // Check if bucket exists
  const bucketExists = buckets?.some(b => b.name === BUCKET_NAME);

  if (bucketExists) {
    console.log(`\nBucket "${BUCKET_NAME}" already exists!`);
  } else {
    // Create bucket
    console.log(`\nCreating bucket "${BUCKET_NAME}"...`);
    const { data, error } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true, // Make bucket public so files are accessible
      fileSizeLimit: 524288000, // 500MB max file size
    });

    if (error) {
      console.error('Error creating bucket:', error.message);
    } else {
      console.log('Bucket created successfully!');
    }
  }
}

main().catch(console.error);
