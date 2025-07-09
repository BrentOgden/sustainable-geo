import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import Blog from './pages/Blog'
import BlogPost from './pages/Blogs/BlogPostTest'
import NotFoundPage from './pages/NotFound'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow pt-20">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 & catch-all */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  )
}
