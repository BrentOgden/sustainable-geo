// src/components/ContactForm.jsx
import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const RECAPTCHA_SITE_KEY = '6LcBPnQrAAAAAEFeNdv0cnAY8UWWiS9rSaXOF_7e'

export default function ContactForm() {
  const recaptchaRef = useRef(null)

  const [formData, setFormData]       = useState({ name: '', email: '', message: '' })
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const [submitting, setSubmitting]   = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)

  const handleFocus = () => {
    if (!showCaptcha) setShowCaptcha(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(f => ({ ...f, [name]: value }))
    if (!showCaptcha) setShowCaptcha(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA')
      return
    }

    setSubmitting(true)
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken })
      })
      if (!resp.ok) {
        const err = await resp.json()
        throw new Error(err.error || 'Network error')
      }

      alert('Thanks! Your message has been sent.')
      setFormData({ name:'', email:'', message:'' })
      recaptchaRef.current.reset()
      setRecaptchaToken(null)
      setShowCaptcha(false)
    } catch (err) {
      console.error('Submission error:', err)
      alert('Oops! Submission failed. Please try again.')
    }
    setSubmitting(false)
  }

  return (
    <section className="bg-[#031A13] py-8 text-white">
      <div className="max-w-6xl mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-0">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 netlify">
          <h2 className="text-xl font-semibold mb-4">Business Inquiry</h2>

          <input
            name="name"
            type="text"
            required
            placeholder="Name*"
            value={formData.name}
            onFocus={handleFocus}
            onChange={handleChange}
            className="w-full bg-transparent placeholder-white px-4 border border-white focus:border-[rgb(78,181,150)] outline-none py-2"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email*"
            value={formData.email}
            onFocus={handleFocus}
            onChange={handleChange}
            className="w-full bg-transparent placeholder-white px-4 border border-white focus:border-[rgb(78,181,150)] outline-none py-2"
          />

          <textarea
            name="message"
            required
            placeholder="Message*"
            value={formData.message}
            onFocus={handleFocus}
            onChange={handleChange}
            className="w-full bg-transparent placeholder-white px-4 border border-white focus:border-[rgb(78,181,150)] outline-none py-2 h-32 resize-none"
          />

          {/* reCAPTCHA */}
          {showCaptcha && (
            <div className="pt-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => setRecaptchaToken(token)}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`
              mt-2 w-full px-6 py-3 rounded-sm
              ${submitting
                ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                : 'bg-white text-black hover:bg-[rgb(15,48,38)] transition duration-200'
              }
            `}
          >
            {submitting ? 'Sending…' : 'Send'}
          </button>

          <p className="mt-6 text-xs text-center text-gray-300">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" className="underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" className="underline">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </form>

        {/* Contact Info */}
        <div className="space-y-4 pl-6 text-white">
          <h2 className="text-xl font-semibold">Sustainable Geospatial</h2>
          <p className="text-gray-300">500 N Grant St #4155, Denver, Colorado, USA, 80203</p>
          <p>(720) 703-0701</p>
          <h2 className="text-xl font-semibold mt-6">Turnkey Solutions</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Site Identification Ranking & Monitoring</li>
            <li>Remote Sensing Imagery & Spectral Analysis</li>
            <li>LiDAR & Photogrammetric 3D Modeling</li>
            <li>GIS Project Management – Planning & Execution</li>
            <li>Cartographic Design & Web Mapping</li>
            <li>Data Management & Custom Visualizations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
