import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logogeo.png'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="bg-[#031A13] text-md text-white shadow fixed w-full z-10">
            <div className="max-w-screen md:mx-8 my-2 flex items-center justify-between p-4">
                {/* Logo */}
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Logo" className="h-10 md:h-[72px]" />
                </NavLink>

                {/* Desktop Nav (unchanged) */}
                <nav className="hidden md:flex ml-10 space-x-4 md:space-x-6">
                    <NavLink
                        to="/"
                        className="decoration-white underline-offset-12 hover:underline"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="decoration-white underline-offset-12 hover:underline"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/solutions"
                        className="decoration-white underline-offset-12 hover:underline"
                    >
                        Solutions
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className="decoration-white underline-offset-12 hover:underline"
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="decoration-white underline-offset-12 hover:underline"
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <HiMenu size={28} />
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`
          fixed inset-0 bg-[#031A13] z-10 transform
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
        `}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="Logo" className="h-10" />
                    </NavLink>
                    <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className='text-black'>
                        <HiX size={28} />
                    </button>
                </div>
                <nav className="flex flex-col items-left justify-left space-y-8 mt-8 pl-6">
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/about', label: 'About' },
                        { to: '/solutions', label: 'Solutions' },
                        { to: '/blog', label: 'Blog' },
                        { to: '/contact', label: 'Contact' },
                    ].map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl decoration-white underline-offset-12 hover:underline"
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}
