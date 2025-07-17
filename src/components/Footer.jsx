// src/components/Footer.jsx
import React from 'react'
import logo from '../assets/logogeo.png'

export default function Footer() {
  return (
    <footer className="bg-[#031A13]">
      
      <div className="max-w-6xl mx-auto border-t border-white py-4 px-4 flex items-start justify-between">
        
        <div className="space-y-2 text-gray-300">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()}
          </p>
          <p className="text-sm">
            Sustainable Geospatial Solutions LLC, DBA Sustainable Geospatial – All Rights Reserved.
          </p>
          <p className='text-xs'>Page created by <a href='https://www.pspcompass.com' target='_blank' className='font-bold text-[rgb(78,181,150)] hover:text-[rgb(78,181,150,.8)]'>PSP Compass Solutions</a></p>
        </div>

        
        <div>
          <img
            src={logo}
            alt="Sustainable Geospatial Logo"
            className="h-12 md:h-16"
          />
          
        </div>
      </div>

      
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
