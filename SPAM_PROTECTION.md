# Spam Protection

This application uses **honeypot-based spam protection** instead of reCAPTCHA to prevent bot submissions.

## How It Works

### 1. Honeypot Field (Primary Defense)

Both the **Contact** and **Offerte** forms include a hidden "website" field:

```html
<input
  type="text"
  name="website"
  value={formData.website}
  onChange={handleChange}
  tabIndex={-1}
  autoComplete="off"
  style={{
    position: "absolute",
    left: "-9999px",
    width: "1px",
    height: "1px",
  }}
/>
```

**How it works:**
- This field is **invisible** to real users (positioned off-screen)
- Real users never see or fill this field
- Bots automatically fill ALL form fields they detect
- If the field is filled → It's a bot → Pretend success but don't send

**Server-side check:**
```javascript
// Honeypot check - if 'website' field is filled, it's a bot
if (formData.website) {
  // Pretend success to confuse bots
  return NextResponse.json({ success: true, message: "Bericht verzonden!" }, { status: 200 })
}
```

### 2. Time-Based Check (Secondary Defense)

Forms track how long they've been loaded:

```javascript
const [formLoadTime] = useState(Date.now())
```

**Server-side check:**
```javascript
// Time check - if form was submitted too fast (< 2 seconds), likely a bot
if (formData.formLoadTime) {
  const timeSinceLoad = Date.now() - formData.formLoadTime
  if (timeSinceLoad < 2000) {
    return NextResponse.json({ success: true, message: "Bericht verzonden!" }, { status: 200 })
  }
}
```

**How it works:**
- Real users take time to read and fill forms (usually >2 seconds)
- Bots submit instantly
- If submitted in <2 seconds → It's a bot → Pretend success

## Why This Approach?

### Advantages:
✓ **No external dependencies** - No Google reCAPTCHA API
✓ **No user friction** - Users don't need to solve puzzles
✓ **No privacy concerns** - No data sent to Google
✓ **Works without JavaScript** - Honeypot works even if JS is disabled
✓ **No API key management** - No keys to rotate or manage
✓ **Free forever** - No costs or quotas
✓ **Fast** - No external API calls to verify

### Disadvantages:
- Sophisticated bots may detect honeypot fields
- Not as foolproof as CAPTCHA for determined attackers
- No machine learning risk analysis

## Effectiveness

**Good protection against:**
- Simple spam bots
- Form auto-fill bots
- Mass submission scripts
- Basic automated attacks

**May not stop:**
- Advanced bots that analyze CSS/positioning
- Human-operated spam farms
- Targeted attacks with custom code

## If You Need Stronger Protection

If you start receiving spam despite the honeypot, you can:

1. **Add more honeypot fields** with different names
2. **Add JavaScript challenges** (mouse movement, keyboard timing)
3. **Implement rate limiting** (max submissions per IP per hour)
4. **Add email verification** (send confirmation link)
5. **Re-enable reCAPTCHA** (but you'll need valid keys)

## Current Implementation

**Both forms protected:**
- `/contact` - Contact form
- `/offerte-aanvragen` - Offerte request form

**API routes with honeypot checks:**
- `/api/contact` - Contact form submission
- `/api/send-offerte` - Offerte form submission

## Testing

To test the honeypot:

1. **Normal submission (should work):**
   - Fill out form normally
   - Submit
   - Should receive success message and email

2. **Bot simulation (should be blocked):**
   - Open browser dev console
   - Fill the hidden website field:
     ```javascript
     document.querySelector('input[name="website"]').value = "bot"
     ```
   - Submit form
   - Should show "success" but no email sent

## Monitoring

To monitor spam attempts:

1. Check server logs for "Honeypot veld" messages
2. Track form submissions vs. emails sent (gap = blocked bots)
3. Monitor submission times in logs

## Summary

Your forms are now protected by:
- 🍯 Hidden honeypot field
- ⏱️ Time-based submission check
- ✅ Server-side validation
- 🚫 No reCAPTCHA required
