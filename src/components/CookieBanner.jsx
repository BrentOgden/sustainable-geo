// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-0MXRMM91M6'  

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    
    if (localStorage.getItem('sg_cookie_consent') === 'true') {
      setAccepted(true)
      loadGoogleAnalytics()
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('sg_cookie_consent', 'true')
    setAccepted(true)
    loadGoogleAnalytics()
  }

  function loadGoogleAnalytics() {
   
    const tag = document.createElement('script')
    tag.async = true
    tag.src   = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(tag)

   
    const inline = document.createElement('script')
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { 'anonymize_ip': true });
    `
    document.head.appendChild(inline)
  }

  if (accepted) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
        <div>
          <h4 className="font-semibold">This website uses cookies.</h4>
          <p className="mt-1 text-sm">
            We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="mt-4 md:mt-0 bg-white hover:bg-[rgb(13,41,33)] hover:text-white text-black px-6 py-2 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
