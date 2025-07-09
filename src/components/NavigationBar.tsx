import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { Share } from 'next/font/google'

const share = Share({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
})

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Resume/CV', id: 'resume' },
]

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setHasScrolled(scrollTop > 10)

      const offsets = navItems.map(({ id }) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          return { id, offset: Math.abs(rect.top) }
        }
        return { id, offset: Infinity }
      })

      const nearest = offsets.reduce((prev, curr) =>
        prev.offset < curr.offset ? prev : curr
      )
      setActiveSection(nearest.id)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`
          fixed top-2 left-1/2 transform -translate-x-1/2 z-50 
          w-[90%] md:w-[50%] max-w-2xl py-3 px-4
          flex items-center justify-between
          transition-all duration-300
          rounded-xl
          ${hasScrolled ? 'bg-[#1f1f1f] shadow-lg backdrop-blur-md bg-opacity-80' : ''}
        `}
      >
        {/* Logo */}
        <img src="/img/logoMobile.png" alt="Logo" className="w-15 h-10" />

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex space-x-8 text-sm ${share.className} text-[#FBF8EF]`}>
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`relative transition ${
                  activeSection === id ? 'text-[#06923E]' : ''
                }`}
              >
                {name}
                {activeSection === id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#06923E]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <RxCross1 className="text-[#06923E] w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="text-[#06923E] w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl p-4 z-40">
          <ul className={`flex flex-col gap-4 text-sm text-[#FBF8EF] ${share.className}`}>
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block transition ${
                    activeSection === id ? 'text-[#06923E]' : ''
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default NavigationBar
