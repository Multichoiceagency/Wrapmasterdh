# reCAPTCHA v2 Setup Required

## Current Status

✓ Reverted back to reCAPTCHA v2 implementation
✓ Code is ready to use v2 with checkbox "I'm not a robot"
❌ **Your old keys DON'T work** - Google Project #86335816058 has been deleted

## Why Your Keys Don't Work

When I tested the keys you provided:
- Site Key: `6LeH1iksAAAAAHL1s_Oy-3-hkdvk6qgMzSrMTiZK`
- Secret Key: `6LeH1iksAAAAAPed8uW1pFlKT0hrlFR2FxqYp0XU`

Google API returned:
```
"error-codes": ["Project #86335816058 has been deleted."]
```

This means the Google Cloud project associated with these keys was deleted, so they can no longer be used.

## How to Fix (5 minutes)

### Step 1: Create New reCAPTCHA v2 Site

1. Go to: **https://www.google.com/recaptcha/admin**
2. Click the **+ (plus)** button to create a new site
3. Fill in:
   - **Label**: Wrapmaster Den Haag (or whatever you want)
   - **reCAPTCHA type**: Choose **"reCAPTCHA v2"**
   - **Subtype**: Select **"I'm not a robot" Checkbox**
   - **Domains**: Add your domains (one per line):
     ```
     wrapmasterdh.nl
     www.wrapmasterdh.nl
     localhost
     coolify.barosy.nl
     ```
     (Add any other domains you use)
4. Accept the terms
5. Click **Submit**

### Step 2: Copy Your New Keys

After creating the site, you'll see:
- **Site Key** (starts with `6L...`)
- **Secret Key** (starts with `6L...`)

Copy both keys.

### Step 3: Update Environment Variables

**On your production server** (Coolify):

1. Go to your Coolify environment variables
2. Update these two variables:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-new-site-key-here
   RECAPTCHA_SECRET_KEY=your-new-secret-key-here
   ```
3. Redeploy your application

**For local development** (`.env.local`):

Update the same variables in your local `.env.local` file and restart your dev server.

### Step 4: Test

1. Visit your contact form: `/contact`
2. The reCAPTCHA checkbox should appear
3. Click "I'm not a robot"
4. Checkbox should complete with a checkmark ✓
5. Submit the form - it should work!

## Troubleshooting

### Checkbox won't load?
- Clear browser cache
- Make sure you added the correct domain to the reCAPTCHA admin console
- Check browser console (F12) for errors

### "Invalid site key" error?
- Double-check you copied the **Site Key** (not Secret Key) to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- Verify the key in your production environment matches the one from Google admin

### Forms still fail?
- Make sure you copied the **Secret Key** to `RECAPTCHA_SECRET_KEY`
- Check server logs for verification errors
- Ensure both keys are from the same reCAPTCHA site

## What Changed in the Code

✓ Reverted from Enterprise to standard v2
✓ Using `react-google-recaptcha` package again
✓ Simple checkbox verification (no risk scoring)
✓ Removed action-based verification
✓ Standard Google API endpoint

## Summary

Your code is ready - you just need to create new reCAPTCHA v2 keys and update your environment variables. The old keys won't work because their project was deleted.

Create new keys here: **https://www.google.com/recaptcha/admin**
