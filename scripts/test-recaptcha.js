/**
 * Test script to verify reCAPTCHA v2 configuration
 */

require('dotenv').config({ path: '.env.local' })

async function testRecaptchaConfig() {
  console.log('=== reCAPTCHA v2 Configuration Test ===\n')

  // Check environment variables
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  console.log('1. Environment Variables:')
  console.log(`   NEXT_PUBLIC_RECAPTCHA_SITE_KEY: ${siteKey ? '✓ Present' : '✗ MISSING'}`)
  console.log(`   RECAPTCHA_SECRET_KEY: ${secretKey ? '✓ Present' : '✗ MISSING'}`)

  if (!siteKey || !secretKey) {
    console.log('\n❌ Environment variables are not configured properly!')
    process.exit(1)
  }

  // Validate key format
  console.log('\n2. Key Format Validation:')
  const siteKeyValid = siteKey.startsWith('6Le') && siteKey.length === 40
  const secretKeyValid = secretKey.startsWith('6Le') && secretKey.length === 40

  console.log(`   Site Key format: ${siteKeyValid ? '✓ Valid' : '✗ Invalid'}`)
  console.log(`   Secret Key format: ${secretKeyValid ? '✓ Valid' : '✗ Invalid'}`)

  // Test API endpoint accessibility
  console.log('\n3. Testing Google reCAPTCHA v2 API accessibility:')
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=test_token`,
    })

    const data = await response.json()

    console.log(`   API Status: ${response.ok ? '✓ Reachable' : '✗ Not reachable'}`)
    console.log(`   Response: ${JSON.stringify(data, null, 2)}`)

    // The test token should fail, but if we get a proper error response, the API is working
    if (data['error-codes']) {
      if (data['error-codes'].includes('invalid-input-response')) {
        console.log('\n✓ API is working correctly (test token rejected as expected)')
      } else if (data['error-codes'].includes('invalid-input-secret')) {
        console.log('\n❌ Secret key is invalid!')
      } else if (data['error-codes'].includes('Project') && data['error-codes'][0].includes('deleted')) {
        console.log('\n❌ Google Project has been deleted! You need to create NEW reCAPTCHA v2 keys.')
        console.log('   Go to: https://www.google.com/recaptcha/admin')
      } else {
        console.log(`\n⚠ Unexpected error codes: ${data['error-codes'].join(', ')}`)
      }
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`)
  }

  console.log('\n=== Key Information ===')
  console.log('Site Key (public): ' + siteKey)
  console.log('Secret Key (private): ' + secretKey.substring(0, 20) + '...')

  console.log('\n=== Next Steps ===')
  console.log('1. Create NEW reCAPTCHA v2 keys at: https://www.google.com/recaptcha/admin')
  console.log('2. Choose "reCAPTCHA v2" with "I\'m not a robot" checkbox')
  console.log('3. Add your domains (wrapmasterdh.nl, localhost, etc.)')
  console.log('4. Update .env.local with the new keys')
  console.log('5. Restart your dev server: npm run dev')
  console.log('6. Test the forms at /contact and /offerte-aanvragen')
}

testRecaptchaConfig().catch(console.error)
