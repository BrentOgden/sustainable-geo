import React from 'react'
import Mission from "../components/Mission";
import SolutionsList from "../components/SolutionsList";
import ImageGrid from '../components/ImageGrid'
import BlogMin from '../components/BlogMin'
import { Helmet } from 'react-helmet-async'

import grid6 from '../assets/grid6.jpeg'
import ContactForm from '../components/ContactForm';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>GIS Consulting Services in Denver | Sustainable Geospatial</title>
                <meta
                    name="description"
                    content="Expert geospatial consulting services in Denver. We provide GIS analysis, drone mapping, and site selection for sustainable planning and development."
                />
            </Helmet>
            <section
                className="
          relative 
          h-[450px]      
          md:h-[700px]
          w-screen
          bg-[url('./assets/hero.jpeg')]
          bg-cover
          bg-center
          flex
          items-end
          justify-left
          text-white
        "
            >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* content */}
                <div className="relative text-left pl-12 pb-8">
                    <h1 className="w-1/4 text-[62px]/18 font-semibold">
                        Sustainable Geospatial
                    </h1>
                    <p className='text-xl w-80 italic py-4 text-pretty font-semibold'>Empowering Sustainability, Delivering Location Intel</p>
                    <a
                        href="/contact"
                        className="
                          mt-6
                          inline-block
                          bg-[rgb(15,48,38)]
                          text-white 
                          font-bold            
                          px-6
                          py-4
                          rounded
                          border-b-4
                          border-t-0
                          border-l-0
                          border-r-0            
                          border-[rgb(78,181,150)]  
                        "
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <Mission />
            <ImageGrid />
            
            <section className="bg-[#031A13]">
                <div className="mx-4 md:max-w-6xl md:mx-auto border-b border-white py-8 px-0">
                    <h2 className="text-xl text-white font-semibold">
                        Contact Us
                    </h2>
                </div>
            </section>

            <ContactForm />
            <section className="bg-[#031A13]">
                <div className="mx-4 md:max-w-6xl md:mx-auto border-b border-white py-8 px-0">
                    <h2 className="text-xl text-white font-semibold">
                        Sustainable Geospatial Insights & Industry Trends
                    </h2>
                </div>
            </section>
            <BlogMin />
        </>
    );
}
