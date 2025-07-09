// src/server.js
import express from 'express'
import fetch   from 'node-fetch'
import nodemailer from 'nodemailer'
import dotenv  from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

const {
  RECAPTCHA_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_TO
} = process.env

// 1) configure your SMTP transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 587,  // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body

  // 2) Verify reCAPTCHA
  try {
    const params = new URLSearchParams({
      secret:   RECAPTCHA_SECRET,
      response: recaptchaToken,
    })
    const r = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      { method: 'POST', body: params }
    )
    const { success } = await r.json()
    if (!success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed' })
    }
  } catch (err) {
    console.error('reCAPTCHA error:', err)
    return res.status(500).json({ error: 'reCAPTCHA service error' })
  }

  // 3) Send email via Nodemailer
  try {
    await transporter.sendMail({
      from:    `"${name}" <${SMTP_USER}>`,    // appear from your domain
      to:      EMAIL_TO,                      // your inbox
      replyTo: email,                         // allows you to hit “Reply” to the visitor
      subject: `New contact from ${name}`,
      text:    message,
      html:    `<p>${message.replace(/\n/g, '<br>')}</p>
                <p>From: ${name} &lt;${email}&gt;</p>`,
    })
    return res.json({ status: 'ok' })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(3000, () => console.log('Server listening on port 3000'))
