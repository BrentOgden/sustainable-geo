// src/components/Footer.jsx
import React from 'react'
import logo from '../assets/logogeo.png'

export default function Footer() {
  return (
    <footer className="bg-[#031A13]">
      {/* Top row: text left, logo right */}
      <div className="max-w-6xl mx-auto border-t border-white py-4 px-4 flex items-start justify-between">
        {/* Left text block */}
        <div className="space-y-2 text-gray-300">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()}
          </p>
          <p className="text-sm">
            Sustainable Geospatial Solutions LLC, DBA Sustainable Geospatial – All Rights Reserved.
          </p>
        </div>

        {/* Right logo */}
        <div>
          <img
            src={logo}
            alt="Sustainable Geospatial Logo"
            className="h-12 md:h-16"
          />
        </div>
      </div>

      {/* Bottom row: centered Contact link */}
      <div className="max-w-6xl mx-auto py-4 pt-0 px-4">
        <p className="text-center">
          <a
            href="/contact"
            className="text-lg text-white hover:underline"
          >
            Contact
          </a>
        </p>
      </div>
    </footer>
  )
}
