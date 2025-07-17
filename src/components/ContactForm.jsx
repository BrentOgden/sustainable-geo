// src/components/ContactForm.jsx
import React, { useState, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import ReCAPTCHA from 'react-google-recaptcha'

const RECAPTCHA_SITE_KEY = '6LcBPnQrAAAAAEFeNdv0cnAY8UWWiS9rSaXOF_7e'

export default function ContactForm() {
  const recaptchaRef = useRef(null)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState(null)

  const [state, handleSubmit] = useForm('xnnzqyry')

  return (
    <section className="bg-[#031A13] py-8 text-white">
      <div className="max-w-6xl mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-0">

        {/* ─── Left column: either form or success message ─────────────────── */}
        <div className="space-y-4">
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <IoCheckmarkCircleOutline className="text-5xl mb-4 text-green-400" />
              <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
              <p className="text-center">
                We’ve received your inquiry and will get back to you within 2–5 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={async e => {
                e.preventDefault()
                if (!recaptchaToken) {
                  alert('Please complete the reCAPTCHA')
                  return
                }
                await handleSubmit(e)
                recaptchaRef.current.reset()
                setRecaptchaToken(null)
                setShowCaptcha(false)
              }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold mb-4">Business Inquiry</h2>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name*"
                onFocus={() => setShowCaptcha(true)}
                className="w-full bg-transparent placeholder-white px-4 border border-white focus:border-[rgb(78,181,150)] outline-none py-2"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email*"
                onFocus={() => setShowCaptcha(true)}
                className="w-full bg-transparent placeholder-white px-4 border border-white focus:border-[rgb(78,181,150)] outline-none py-2"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                id="message"
                name="message"
                required
                placeholder="Message*"
                onFocus={() => setShowCaptcha(true)}
                className="w-full bg-transparent placeholder-white px-4 border border-white focus:border-[rgb(78,181,150)] outline-none py-2 h-32 resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              {showCaptcha && (
                <div className="pt-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={token => setRecaptchaToken(token)}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className={`
                  mt-2 w-full px-6 py-3 rounded-sm
                  ${state.submitting
                    ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                    : 'bg-white text-black hover:bg-[rgb(15,48,38)] transition duration-200'
                  }
                `}
              >
                {state.submitting ? 'Sending…' : 'Send'}
              </button>
            </form>
          )}
        </div>

        {/* ─── Right column: contact info sidebar ──────────────────────────── */}
        <div className="space-y-4 pl-6 text-white">
          <h2 className="text-xl font-semibold">Sustainable Geospatial</h2>
          <p className="text-gray-300">
            500 N Grant St #4155, Denver, Colorado, USA, 80203
          </p>
          <p>(720) 703-0701</p>
          <h2 className="text-xl font-semibold mt-6">Turnkey Solutions</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Site Identification Ranking &amp; Monitoring</li>
            <li>Remote Sensing Imagery &amp; Spectral Analysis</li>
            <li>LiDAR &amp; Photogrammetric 3D Modeling</li>
            <li>GIS Project Management – Planning &amp; Execution</li>
            <li>Cartographic Design &amp; Web Mapping</li>
            <li>Data Management &amp; Custom Visualizations</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
