/**
 * Test SMTP Connection
 * Usage: node scripts/test-smtp.js
 */

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testSMTP() {
  console.log('='.repeat(60));
  console.log('SMTP Connection Test');
  console.log('='.repeat(60));

  // Show current config (hide password)
  console.log('\nCurrent SMTP Config:');
  console.log(`  HOST: ${process.env.SMTP_HOST}`);
  console.log(`  PORT: ${process.env.SMTP_PORT}`);
  console.log(`  USER: ${process.env.SMTP_USER}`);
  console.log(`  FROM: ${process.env.SMTP_FROM}`);
  console.log(`  TO:   ${process.env.SMTP_TO}`);
  console.log(`  PASS: ${'*'.repeat(10)}`);

  // Validate config
  const errors = [];
  if (process.env.SMTP_HOST?.includes('imap')) {
    errors.push('SMTP_HOST contains "imap" - should be "smtp.hostnet.nl" for sending emails');
  }
  if (process.env.SMTP_TO && !process.env.SMTP_TO.includes('@')) {
    errors.push('SMTP_TO should be an email address, not a hostname');
  }

  if (errors.length > 0) {
    console.log('\n⚠️  Configuration Warnings:');
    errors.forEach(e => console.log(`  - ${e}`));
  }

  // Create transporter
  const port = Number(process.env.SMTP_PORT);
  const isSecure = port === 465; // true for 465 (SSL), false for 587 (STARTTLS)

  console.log(`\nUsing port ${port}, secure: ${isSecure}`);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: port,
    secure: isSecure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  console.log('\nTesting connection...');

  try {
    await transporter.verify();
    console.log('✅ SMTP Connection successful!');

    // Send test email
    const testTo = process.env.SMTP_TO?.includes('@') ? process.env.SMTP_TO : process.env.SMTP_FROM;
    console.log(`\nSending test email to ${testTo}...`);

    await transporter.sendMail({
      from: `"Wrapmaster Test" <${process.env.SMTP_FROM}>`,
      to: testTo,
      subject: 'SMTP Test - Wrapmaster',
      html: `
        <h2>SMTP Test Successful!</h2>
        <p>Dit is een test email van het Wrapmaster contact formulier.</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      `,
    });

    console.log('✅ Test email sent successfully!');
  } catch (error) {
    console.error('❌ SMTP Error:', error.message);
    console.error('\nFull error:', error);
  }
}

testSMTP();
