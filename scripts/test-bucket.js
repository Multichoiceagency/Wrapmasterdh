/**
 * Test bucket access and upload a small test file
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'photos';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  console.log('Testing Supabase Storage...');
  console.log('URL:', SUPABASE_URL);
  console.log('Bucket:', BUCKET_NAME);
  console.log('');

  // Get bucket info
  console.log('1. Getting bucket info...');
  const { data: bucket, error: bucketError } = await supabase.storage.getBucket(BUCKET_NAME);

  if (bucketError) {
    console.error('   Error:', bucketError.message);
    console.log('   Status:', bucketError.status);
    console.log('   Full error:', JSON.stringify(bucketError, null, 2));
  } else {
    console.log('   Bucket info:', JSON.stringify(bucket, null, 2));
  }

  // Try to list files
  console.log('\n2. Listing files in bucket...');
  const { data: files, error: listError } = await supabase.storage
    .from(BUCKET_NAME)
    .list('', { limit: 5 });

  if (listError) {
    console.error('   Error listing files:', listError.message);
    console.log('   Full error:', JSON.stringify(listError, null, 2));
  } else {
    console.log('   Files found:', files?.length || 0);
    if (files?.length > 0) {
      console.log('   Sample files:', files.slice(0, 5).map(f => f.name));
    }
  }

  // Try to upload a test file
  console.log('\n3. Uploading test file...');
  const testContent = Buffer.from('Hello from Wrapmaster!');
  const testPath = `test-${Date.now()}.txt`;

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(testPath, testContent, {
      contentType: 'text/plain',
      upsert: true,
    });

  if (uploadError) {
    console.error('   Upload error:', uploadError.message);
    console.log('   Error code:', uploadError.statusCode || uploadError.status);
    console.log('   Full error:', JSON.stringify(uploadError, null, 2));
  } else {
    console.log('   Upload successful!');
    console.log('   Path:', uploadData.path);

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(testPath);

    console.log('   Public URL:', urlData.publicUrl);

    // Clean up test file
    console.log('\n4. Cleaning up test file...');
    const { error: deleteError } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([testPath]);

    if (deleteError) {
      console.error('   Delete error:', deleteError.message);
    } else {
      console.log('   Test file deleted');
    }
  }
}

main().catch(console.error);
