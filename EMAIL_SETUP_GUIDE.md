# Email Setup Guide for Contact Form

Your contact form is now configured to send emails to `info@mymirro.in` when someone submits it!

## Setup Steps

### 1. Create a Resend Account
1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up with your email (it's FREE - 100 emails/day, 3,000/month)

### 2. Get Your API Key
1. After signing up, go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Give it a name like "MyMirro Contact Form"
4. Copy the API key (it starts with `re_`)

### 3. Add API Key to Your Project
Create a file called `.env.local` in your project root (same folder as `package.json`):

```bash
# .env.local
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Replace `re_your_actual_api_key_here` with your actual API key!

### 4. Restart Your Dev Server
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### 5. Test the Form!
1. Go to your contact page: `http://localhost:3002/contact`
2. Fill out the form and submit
3. Check your email at `info@mymirro.in` - you should receive the form details!

---

## What Happens When Someone Submits?

You'll receive an email at **info@mymirro.in** with:
- Name
- Company
- Email
- Phone (if provided)
- Message

---

## Troubleshooting

### "Failed to send email" error?
- Check that your API key is correct in `.env.local`
- Make sure you restarted the dev server after adding the key
- Check the console for error messages

### Not receiving emails?
- Check your spam folder
- Verify the API key is valid at [resend.com/api-keys](https://resend.com/api-keys)
- Try sending a test email from Resend dashboard

### Want to use your own domain email?
After verifying your domain in Resend, update the `from` field in:
`/app/api/contact/route.ts` line 11:
```typescript
from: 'Contact Form <contact@mymirro.in>',
```

---

## Free Tier Limits
- **100 emails per day**
- **3,000 emails per month**
- Perfect for a contact form!

If you need more, Resend has affordable paid plans.

---

## Alternative: Use Your Gmail (if you prefer)

If you'd rather use Gmail instead of Resend, let me know and I can switch to Nodemailer with Gmail SMTP!
