// src/pages/Solutions.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import aboutbg from '../assets/aboutbg.jpeg'
import sect11 from '../assets/section1-1.jpeg'
import sect12 from '../assets/section1-2.jpeg'
import sect13 from '../assets/section1-3.jpeg'
import sect21 from '../assets/section2-1.jpeg'
import sect22 from '../assets/section2-2.jpeg'
import sect23 from '../assets/section2-3.jpeg'
import ContactForm from '../components/ContactForm'


export default function Solutions() {
    const solutions = [
        { title: 'Site Identification Ranking and Monitoring', text: 'Identify optimal growth or monitoring locations based on your unique criteria, informing your site identification methodologies and continually monitor conditions over specified timeframes.', img: sect11 },
        { title: 'Remote Sensing Analytics', text: 'Analyze satellite imagery, spectral wavelengths, and aerial imagery to track environmental changes, detect spatial patterns, and inform future planning that enhances your location intelligence.', img: sect12 },
        { title: 'LiDAR and Photogrammetry', text: 'Create highly detailed 3D models of buildings, landscapes, and infrastructure using cutting-edge LiDAR and photogrammetry technologies to strengthen your key development processes.', img: sect13 },

    ]
    const solutions2 = [
        { title: 'GIS Project Management', text: 'From concept to execution - we design and manage scalable GIS projects leading with robust geodatabase architecture, supporting project execution for our clients every step of the way.', img: sect21 },
        { title: 'Cartographic Design', text: 'From natural resource management to urban planning, we help you communicate your complex spatial data through engaging maps.', img: sect22 },
        { title: 'Data Management with Custom Visualizations', text: 'Bring your data to life with interactive story maps, data monitoring dashboards, and custom apps designed to strengthen your location workflows.', img: sect23 },

    ]

    return (
        <>
            <Helmet>
                <title>Geospatial Solutions for Site Selection & Spatial Analysis | </title>
                <meta
                    name="description"
                    content="Discover tailored geospatial solutions including drone mapping, site selection analysis, and GIS modeling to support smart, sustainable project planning."
                />
            </Helmet>
            {/* Hero with full-width bg + overlay */}
            <section
                className="relative h-60 md:h-52 bg-cover bg-top"
                style={{ backgroundImage: `url(${aboutbg})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl text-center mx-4 pt-8 font-semibold text-white">
                        Sustainable Geospatial Solutions
                    </h1>
                </div>
            </section>

            {/* Main content */}
            <main className="py-16 px-0 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold px-6 md:px-0 mb-8 text-white text-center">
                    Geospatial Solutions for Site Selection and Drone Mapping

                </h2>
                <p className='text-gray-300 px-6 md:px-0 text-md text-center'>Unlock the full potential of your location data with expert geospatial solutions, including drone mapping, site selection, and spatial analysis for smarter decision-making.</p>
                <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-6 md:px-0">
                    {solutions.map(({ title, text, img }) => (
                        <div
                            key={title}
                            className="flex flex-col text-white text-left"
                        >
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-68 mb-6 object-cover"
                            />
                            <h3 className="text-xl mb-6 text-white">{title}</h3>
                            <p className="text-gray-300">{text}</p>
                        </div>
                    ))}
                </div>
                <hr className="border-t border-gray-500 opacity-50 my-8" />
                <h2 className="text-3xl font-semibold mb-8 text-white text-center">
                    Geospatial Systems

                </h2>
                <p className='text-gray-300 text-md px-6 md:px-0 text-center'>Build strong spatial data infrastructure that connects your team with the tools they need to take decisive action.</p>
                <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-6 md:px-0">
                    {solutions2.map(({ title, text, img }) => (
                        <div
                            key={title}
                            className="flex flex-col text-white text-left"
                        >
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-68 mb-6 object-cover"
                            />
                            <h3 className="text-xl mb-6 text-white">{title}</h3>
                            <p className="text-gray-300">{text}</p>
                        </div>
                    ))}
                </div>
                <p className='text-sm text-gray-300 text-center px-6 md:px-0'>This is not an exhaustive list of services offered by Sustainable Geospatial. Contact us with further inquiry as your business needs require.</p>
            </main>
            <section className="bg-[#031A13]">
                <div className="max-w-6xl mx-auto border-b border-white py-8 px-4 md:px-0">
                    <h2 className="text-xl text-white font-semibold">
                        Contact Us
                    </h2>
                </div>
            </section>
            <ContactForm />
        </>
    )
}
