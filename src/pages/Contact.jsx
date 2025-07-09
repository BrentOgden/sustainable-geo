// src/pages/Contact.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import aboutbg from '../assets/aboutbg.jpeg'      // ← import your bg image
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Sustainable Geospatial | Schedule a Consultation</title>
                <meta
                    name="description"
                    content="Get in touch with our Denver-based GIS consultants. Schedule a consultation for your next mapping, planning, or environmental analysis project.
"
                />
            </Helmet>
            {/* Hero with bg + overlay */}
            <section
                className="relative h-60 md:h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${aboutbg})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl text-center px-6 font-semibold text-white">
                        Sustainable Geospatial Solutions
                    </h1>
                </div>
            </section>


            {/* Contact Section */}
            <section className="bg-[#031A13]">
                <div className="max-w-6xl mx-auto border-b border-white py-8 px-4 md:px-0">
                    <h2 className="text-xl text-white font-semibold">
                        Contact Us
                    </h2></div>
                <ContactForm />

            </section>
        </>
    )
}
