import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function Footer() {
  const footerLinks = [
    { name: 'Support Center', href: '/support' },
    { name: 'Invoicing', href: '/invoicing' },
    { name: 'Contract', href: '/contract' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
  ]

  return (
    <footer className='bg-white border-t border-gray-200'>
      <div className='container mx-auto px-6 py-8'>
        {/* Upper Section */}
        <div className='flex flex-wrap justify-between items-center gap-6'>
          {/* Logo */}
          <div className='w-full sm:w-auto flex justify-center sm:justify-start'>
            <Logo className='h-4 w-auto sm:h-6' />
          </div>

          {/* Links */}
          <div className='w-full sm:w-auto flex justify-center sm:justify-end flex-wrap gap-4 text-gray-600 text-sm'>
            {footerLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className='hover:text-gray-800 transition-colors'>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Lower Section */}
        <div className='mt-8 text-center text-gray-500 text-sm'>
          <p>Copyright © 2024 Deyvidyorch Sánchez. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
