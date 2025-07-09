import React from 'react'
import { Helmet } from 'react-helmet-async'
import BlogCard from '../components/BlogCard'
import heroImg from '../assets/aboutbg.jpeg'


// sample posts data
const posts = [
    {
        slug: 'what-is-remote-sensing',
        title: 'What Is Remote Sensing? How It Works & Why It Matters',
        date: 'July 1, 2025',
        excerpt: 'Remote sensing is one of the most powerful tools in modern environmental science, GIS, and planning — but many people are still unsure what it actually means.',
        image: 'https://img1.wsimg.com/isteam/getty/2207078575/:/cr=t:0%25,l:0%25,w:87.96%25,h:100%25/rs=w:720,h:541,cg:true',
    },
    //   {
    //     slug:    'what-is-remote-sensing-2',
    //     title:   'Top 5 Cartographic Design Tips',
    //     date:    'June 20, 2025',
    //     excerpt: 'Learn how to make your maps not only accurate, but also eye-catching and readable for any audience…',
    //     image:   'https://source.unsplash.com/collection/190728/800x600',
    //   },
    // …add more posts here
]

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog | Sustainable Geospatial</title>
                <meta
                    name="description"
                    content="Insights on remote sensing, GIS workflows, cartographic design, and more from the Sustainable Geospatial blog."
                />
            </Helmet>
            <section
                className="relative h-60 md:h-52 bg-cover bg-top"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-4xl text-center mx-4 md:text-5xl pt-8 font-semibold text-white">
                        Our Blog
                    </h1>
                </div>
            </section>

            {/* Posts grid */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map(post => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>

        </>
    )

}
