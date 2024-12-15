import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Drawer from '../Drawer'

export default function HomeNavbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const scrollToSection = id => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { name: 'Home', action: () => scrollToSection('home') },
    { name: 'Deals', action: () => scrollToSection('deals') },
    { name: 'New Arrivals', action: () => scrollToSection('new-arrivals') },
    { name: 'Testimonials', action: () => scrollToSection('testimonials') },
    { name: 'Sign in', href: '/sign-in' },
  ]

  return (
    <header>
      <nav className=' max-w-screen-xl mx-auto bg-white'>
        <div className=' px-6 py-4 flex items-center justify-between'>
          {/* Logo */}
          <Logo className='h-6 w-auto sm:h-8' />

          {/* Botón para abrir el Drawer */}
          <button
            className='md:hidden text-gray-600 focus:outline-none'
            onClick={() => setDrawerOpen(true)}>
            {/* Icono de menú (hamburger) */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 6h18M3 12h18m-9 6h9'
              />
            </svg>
          </button>

          {/* Links para pantallas grandes */}
          <div className='hidden md:flex space-x-6 text-gray-600'>
            {navLinks.map((link, index) =>
              link.href ? (
                <Link
                  key={index}
                  to={link.href}
                  className='hover:text-my-gray transition-all'>
                  {link.name}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={link.action}
                  className='hover:text-my-gray transition-all'>
                  {link.name}
                </button>
              )
            )}
            <div>
              <Link
                to='/sign-up'
                className='bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition-all'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <Drawer open={isDrawerOpen} setOpen={setDrawerOpen}>
        {navLinks.map((link, index) =>
          link.href ? (
            <Link
              key={index}
              to={link.href}
              className='block text-lg text-gray-600 hover:text-my-gray transition-all'
              onClick={() => setDrawerOpen(false)}>
              {link.name}
            </Link>
          ) : (
            <button
              key={index}
              onClick={() => {
                link.action()
                setDrawerOpen(false)
              }}
              className='block text-lg text-gray-600 hover:text-my-gray transition-all'>
              {link.name}
            </button>
          )
        )}
        <Link
          to='/sign-up'
          className='block bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition-all text-center mt-4'
          onClick={() => setDrawerOpen(false)}>
          Sign Up
        </Link>
      </Drawer>
    </header>
  )
}
