import { Link, useLocation } from 'react-router-dom'
import { FaUser, FaSearch, FaStar, FaShoppingBag } from 'react-icons/fa'
import { useState } from 'react'
import Drawer from '../Drawer'
import Logo from '../Logo'

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation() // Obtenemos la ruta actual

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Products', href: '/product/' },
    { name: 'Pages', action: () => setDropdownOpen(!isDropdownOpen) },
  ]

  const isActive = path => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path) && path !== '/'
  }

  return (
    <header className='bg-white shadow-md'>
      <nav className='max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Logo className='h-6 w-auto sm:h-8' />

        {/* Links Centrales */}
        <ul className='hidden md:flex space-x-8 items-center'>
          {navLinks.map((link, index) => (
            <li key={index} className='relative'>
              {link.href ? (
                <Link
                  to={link.href}
                  className={`relative text-gray-700 hover:text-black transition-all ${
                    isActive(link.href) ? 'text-black font-bold' : ''
                  }`}>
                  {link.name}
                  {/* Subrayado */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0'
                    }`}></span>
                </Link>
              ) : (
                <button
                  onClick={link.action}
                  className='text-gray-700 hover:text-black transition-all'>
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Iconos a la derecha */}
        <div className=' hidden md:flex space-x-6 items-center text-gray-700'>
          <FaSearch className='w-5 h-5 hover:text-black transition' />
          <FaUser className='w-5 h-5 hover:text-black transition' />
          <FaStar className='w-5 h-5 hover:text-black transition' />
          <FaShoppingBag className='w-5 h-5 hover:text-black transition' />
        </div>

        {/* Botón de menú hamburguesa */}
        <button
          className='md:hidden text-gray-700 focus:outline-none'
          onClick={() => setDrawerOpen(true)}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>

      {/* Drawer */}
      <Drawer open={isDrawerOpen} setOpen={setDrawerOpen}>
        {navLinks.map(
          (link, index) =>
            link.href && (
              <Link
                key={index}
                to={link.href}
                className='block text-lg text-gray-600 hover:text-my-gray transition-all'
                onClick={() => setDrawerOpen(false)}>
                {link.name}
              </Link>
            )
        )}
        <Link
          to='/sign-in'
          className='block bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition-all text-center mt-4'
          onClick={() => setDrawerOpen(false)}>
          Sign In
        </Link>
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
