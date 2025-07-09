// src/pages/About.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import aboutbg from '../assets/aboutbg.jpeg'
import about1 from '../assets/about1.jpeg'
import about2 from '../assets/about2.jpeg'
import about3 from '../assets/about3.jpeg'
import about4 from '../assets/about4.jpeg'
import ImageGridAbout from '../components/ImageGridAbout'
import ContactForm from '../components/ContactForm'

export default function About() {
    const cards = [
        { title: 'Our Mission', text: 'Our mission is to empower sustainable development through geospatial solutions - enhancing clients environmental knowledge of important locations to better inform key growth decisions affecting people, planet, and profit.', img: about1 },
        { title: 'Our Vision', text: 'Our vision is to establish a geospatial consulting firm that delivers high-quality subject matter expertise from a sustainability lens. We believe that decisions informed by location intel will create a more sustainable future for generations.', img: about2 },
        { title: 'Our Values', text: 'We are guided by our commitment to sustainability. Integrity and transparency guide our systems and workflow implementations which effectively balance three core priorities: people, planet, and profit. We are fully employee owned.', img: about3 },
        { title: 'Our Solutions', text: 'We offer geospatial services to our clients, providing location intel that impacts key growth decisions. From project management to data collection, we combine technical and subject matter expertises to further empower sustainability.', img: about4 },
    ]

    return (
        <>
            <Helmet>
                <title>About Sustainable Geospatial | GIS Experts in Colorado</title>
                <meta
                    name="description"
                    content="Learn about our mission to deliver sustainable geospatial solutions using advanced GIS tools, custom software, and expert environmental insight."
                />
            </Helmet>
            {/* Hero with background + overlay */}
            <section
                className="relative h-60 md:h-52 bg-cover bg-top"
                style={{ backgroundImage: `url(${aboutbg})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-4xl text-center mx-4 md:text-5xl pt-8 font-semibold text-white">
                        Sustainable Geospatial Solutions
                    </h1>
                </div>
            </section>

            {/* Section heading inside container, full-width bg */}
            <section className="bg-[#031A13]">
                <div className="max-w-6xl mx-auto border-b border-white py-8 px-4">
                    <h2 className="text-xl text-white font-semibold">About Us</h2>
                </div>
            </section>

            {/* Card grid */}
            <main className="py-16 px-6 md:px-0 md:max-w-6xl md:mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map(({ title, text, img }) => (
                        <div
                            key={title}
                            className="flex flex-col items-center text-white text-center"
                        >
                            <img
                                src={img}
                                alt={title}
                                className="w-60 h-60 mb-6 object-cover rounded-full"
                            />
                            <h3 className="text-xl font-semibold mb-6">{title}</h3>
                            <p className="text-gray-300 mb-6 md:mb-0">{text}</p>
                        </div>
                    ))}
                </div>
            </main>
            <section className="bg-[#031A13] pb-12">
                <div className="md:max-w-6xl md:mx-auto py-8 px-6 md:px-4">
                    <h2 className="text-5xl text-white font-semibold pb-6">Client Testimonial</h2>
                    <p className='text-gray-300 text-xl'>"Not only has Sustainable Geospatial proven capable of various levels of GIS intensity, they have demonstrated a sincere interest in our expected outcomes - it’s not a mere job, it's passion to assist client’s geospatial work."
                    </p>
                    <p className='text-gray-300 text-xl pt-6'>- David Kimmett, AICP
                        Planning Manager, JUWI Inc.</p>
                    <a
                        href="https://www.linkedin.com/in/david-kimmett-aicp-69545946/" target='_blank'
                        className="
                          mt-6
                          inline-block
                          bg-transparent
                          text-white 
                          font-bold            
                          px-6
                          py-4
                          rounded-sm
                          border-1     
                          border-white 
                          hover:bg-white
                          hover:text-black
                        "
                    >
                        Connect with David on LinkedIn
                    </a>
                </div>
                <ImageGridAbout />
                <section className="bg-[#031A13]">
                    <div className="max-w-6xl mx-4 md:mx-auto border-b border-white py-8 px-0">
                        <h2 className="text-xl text-white font-semibold">
                            Contact Us
                        </h2>
                    </div>
                </section>
                <ContactForm />
            </section>


        </>
    )
}
