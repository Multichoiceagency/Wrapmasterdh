# reCAPTCHA Enterprise Setup Guide

## Issue Fixed: Loading Checkbox
The `action` parameter was incorrectly passed to the render function. For checkbox-style reCAPTCHA, the action is only used server-side during verification, not client-side during rendering.

## Required Steps to Complete Setup

### 1. Whitelist Your Domain in Google Cloud Console

**Important:** Your domain MUST be whitelisted for reCAPTCHA to work.

1. Go to: https://console.cloud.google.com/security/recaptcha?project=gen-lang-client-0902763376

2. Click on your site key (should show: `6Lc4nGEsAAAAAIWC1Ntbwr497M1ajxlHKnAhG5Ke`)

3. Under **"Domains"**, add your domains:
   - Your production domain (e.g., `yourdomain.com`, `www.yourdomain.com`)
   - Your Coolify domain (e.g., `coolify.barosy.nl`)
   - For local testing: `localhost`
   - For sslip.io domains: add the full domain including the subdomain

4. Click **"Save"**

### 2. Verify API Key Has Correct Permissions

1. Go to: https://console.cloud.google.com/apis/credentials?project=gen-lang-client-0902763376

2. Find your API key: `AIzaSyAqtttf52WI8Es0aPyjuOBz200aGo6b5Po`

3. Verify:
   - **Application restrictions**: "None" (or specific IP addresses)
   - **API restrictions**: "reCAPTCHA Enterprise API" only

4. Click **"Save"** if you made changes

### 3. Ensure reCAPTCHA Enterprise API is Enabled

1. Go to: https://console.cloud.google.com/apis/library/recaptchaenterprise.googleapis.com?project=gen-lang-client-0902763376

2. Verify the API shows as **"ENABLED"**
   - If not, click **"ENABLE"**

### 4. Environment Variables

Make sure these are set in your production environment:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc4nGEsAAAAAIWC1Ntbwr497M1ajxlHKnAhG5Ke
RECAPTCHA_SECRET_KEY=AIzaSyAqtttf52WI8Es0aPyjuOBz200aGo6b5Po
RECAPTCHA_PROJECT_ID=gen-lang-client-0902763376
```

### 5. Testing

After completing the above steps:

1. Clear your browser cache
2. Visit your contact form: `/contact`
3. The reCAPTCHA checkbox should appear and complete when clicked
4. Submit the form
5. Check server logs for: `Contact form reCAPTCHA score: X.X`

## Troubleshooting

### Checkbox Still Loading Forever?
- **Check browser console** (F12) for errors
- **Verify domain is whitelisted** in step 1 above
- **Wait 5-10 minutes** after adding domain (propagation time)
- **Clear browser cache** completely

### "Invalid site key" error?
- Verify the site key in `.env` matches the one in Google Console
- Restart your application after changing environment variables

### "Permission denied" or API errors?
- Verify API key restrictions in step 2 above
- Ensure reCAPTCHA Enterprise API is enabled in step 3

### Getting low scores (< 0.5)?
- This is normal for first-time users or VPN users
- You can lower the threshold in `lib/recaptcha.ts` (line 95)
- Score ranges: 0.0-0.1 (likely bot), 0.5-1.0 (likely human)

## How It Works

1. **Client-side**: User clicks "I'm not a robot" checkbox
2. **Google validates**: User interaction and browser fingerprint
3. **Token generated**: Google returns a token to your application
4. **Server-side verification**: Your API validates token with Google and gets risk score
5. **Action verification**: Server checks if action matches (CONTACT or OFFERTE)
6. **Score filtering**: Requests with score < 0.5 are rejected

## Support

If you continue to have issues after following all steps above:
1. Check the browser console for JavaScript errors
2. Check the server logs for verification errors
3. Verify all domains are whitelisted (including www vs non-www)
