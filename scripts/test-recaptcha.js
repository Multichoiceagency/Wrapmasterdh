/**
 * Test script to verify reCAPTCHA Enterprise configuration
 */

require('dotenv').config({ path: '.env.local' })

async function testRecaptchaEnterpriseConfig() {
  console.log('=== reCAPTCHA Enterprise Configuration Test ===\n')

  // Check environment variables
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const apiKey = process.env.RECAPTCHA_SECRET_KEY
  const projectId = process.env.RECAPTCHA_PROJECT_ID

  console.log('1. Environment Variables:')
  console.log(`   NEXT_PUBLIC_RECAPTCHA_SITE_KEY: ${siteKey ? '✓ Present (' + siteKey + ')' : '✗ MISSING'}`)
  console.log(`   RECAPTCHA_SECRET_KEY (API Key): ${apiKey ? '✓ Present (' + apiKey.substring(0, 20) + '...)' : '✗ MISSING'}`)
  console.log(`   RECAPTCHA_PROJECT_ID: ${projectId ? '✓ Present (' + projectId + ')' : '✗ MISSING'}`)

  if (!siteKey || !apiKey || !projectId) {
    console.log('\n❌ Environment variables are not configured properly!')
    process.exit(1)
  }

  // Validate key formats
  console.log('\n2. Key Format Validation:')
  const siteKeyValid = siteKey.startsWith('6L') && siteKey.length === 40
  const apiKeyValid = apiKey.startsWith('AIza')

  console.log(`   Site Key format: ${siteKeyValid ? '✓ Valid reCAPTCHA key' : '✗ Invalid'}`)
  console.log(`   API Key format: ${apiKeyValid ? '✓ Valid Google API key' : '✗ Invalid'}`)

  // Test API endpoint with a dummy token
  console.log('\n3. Testing reCAPTCHA Enterprise API:')
  console.log('   Endpoint: https://recaptchaenterprise.googleapis.com/v1/projects/' + projectId + '/assessments')

  try {
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token: 'test_token_12345',
          siteKey: siteKey,
          expectedAction: 'TEST',
        },
      }),
    })

    const data = await response.json()

    console.log(`   HTTP Status: ${response.status}`)
    console.log(`   Response: ${JSON.stringify(data, null, 2)}`)

    if (response.status === 200) {
      if (data.tokenProperties) {
        console.log('\n✓ API is accessible and responding!')
        console.log(`   Token Valid: ${data.tokenProperties.valid ? '✓ Yes' : '✗ No (expected for test token)'}`)
        if (data.riskAnalysis) {
          console.log(`   Risk Score: ${data.riskAnalysis.score || 'N/A'}`)
        }
      }
    } else if (response.status === 400 && data.error) {
      console.log('\n⚠ API responded with error (this might be expected for test token):')
      console.log(`   Error: ${data.error.message}`)
      console.log(`   Status: ${data.error.status}`)
    } else {
      console.log('\n❌ Unexpected API response!')
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`)
  }

  console.log('\n=== Configuration Summary ===')
  console.log('✓ Site Key configured')
  console.log('✓ API Key configured')
  console.log('✓ Project ID configured')

  console.log('\n=== Next Steps ===')
  console.log('1. Restart your dev server: npm run dev')
  console.log('2. Visit /contact or /offerte-aanvragen')
  console.log('3. Submit a form to test with a real reCAPTCHA token')
  console.log('4. Check server logs for reCAPTCHA score')
  console.log('5. Ensure your domain is added to reCAPTCHA Enterprise settings:')
  console.log('   https://console.cloud.google.com/security/recaptcha?project=' + projectId)
}

testRecaptchaEnterpriseConfig().catch(console.error)
