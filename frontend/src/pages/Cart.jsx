import { useState } from 'react'
import { Link } from 'react-router-dom'

import NewsletterSection from '../sections/Newsletter'
import ButtonLink from '../components/ButtonLink'

export default function CartPage() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='bg-white'>
      {/* Contenido */}
      <div className='mx-auto max-w-screen-xl px-4 lg:px-8 mt-8'>
        {/* Título principal */}
        <div className='py-8 px-4 text-center'>
          <h1 className='text-5xl font-serif font-bold text-black'>
            Shopping Cart
          </h1>

          {/* Breadcrumb */}
          <nav className='flex justify-center items-center gap-2 mt-4 text-gray-600 text-lg'>
            <Link to={'/'} className='hover:text-gray-800 transition'>
              Home
            </Link>
            <span className='text-gray-400'>›</span>
            <span className='text-black font-medium'>Your Shopping Cart</span>
          </nav>
        </div>

        {/* Tabla de Productos */}
        <div className='overflow-x-auto'>
          {/* Tabla para pantallas grandes */}
          <table className='hidden md:table min-w-full border-collapse'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 text-gray-700 text-lg'>
                  Product
                </th>
                <th className='text-left py-3 text-gray-700 text-lg'>Price</th>
                <th className='text-left py-3 text-gray-700 text-lg'>
                  Quantity
                </th>
                <th className='text-left py-3 text-gray-700 text-lg'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='flex items-start gap-4 py-4'>
                  <img
                    src='/images/products/product_6.png'
                    alt='Mini Dress'
                    className='w-auto h-48 object-cover'
                  />
                  <div className='space-y-2'>
                    <p className='text-xl font-medium'>
                      Mini Dress With Ruffled Straps
                    </p>
                    <p className='text-lg text-gray-500'>Color: Red</p>
                    <button className='text-base text-red-500 underline mt-1'>
                      Remove
                    </button>
                  </div>
                </td>
                <td className='text-xl font-bold text-gray-900'>$14.90</td>
                <td>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center border border-gray-300 rounded-md'>
                      <button
                        onClick={() => {
                          setQuantity(prev => Math.max(1, prev - 1))
                        }}
                        className='h-10 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-100'>
                        –
                      </button>
                      <span className='px-4 text-gray-800 text-lg'>
                        {quantity}
                      </span>
                      <button
                        onClick={() => {
                          setQuantity(prev => prev + 1)
                        }}
                        className='h-10 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-100'>
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td className='text-xl font-bold text-gray-900'>$14.90</td>
              </tr>
            </tbody>
          </table>

          {/* Diseño de tarjeta para dispositivos móviles */}
          <div className='block md:hidden space-y-6'>
            <div className='flex items-start gap-4 border-b pb-4'>
              {/* Imagen */}
              <img
                src='/images/products/product_6.png'
                alt='Mini Dress'
                className='w-28 h-28 object-cover object-top rounded'
              />

              {/* Información del producto */}
              <div className='flex flex-col flex-1 space-y-2'>
                <p className='text-lg font-medium'>
                  Mini Dress With Ruffled Straps
                </p>
                <p className='text-sm text-gray-500'>Color: Red</p>
                <p className='text-lg font-bold text-gray-900'>$14.90</p>

                {/* Cantidad y Eliminar */}
                <div className='flex justify-between items-center mt-2'>
                  <div className='flex items-center border border-gray-300 rounded-md'>
                    <button
                      onClick={() => {
                        setQuantity(prev => Math.max(1, prev - 1))
                      }}
                      className='h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100'>
                      –
                    </button>
                    <span className='px-4 text-gray-800 text-base'>
                      {quantity}
                    </span>
                    <button
                      onClick={() => {
                        setQuantity(prev => prev + 1)
                      }}
                      className='h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100'>
                      +
                    </button>
                  </div>
                  <button className='text-sm text-red-500 underline'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resumen del Carrito */}
        <div className='flex justify-end mt-6'>
          <div className='w-full lg:w-1/2 bg-gray-50 p-4 rounded-lg shadow-md'>
            {/* Gift Wrap */}
            <div className='flex flex-wrap items-center gap-2 text-sm mb-4'>
              <input
                type='checkbox'
                id='gift-wrap'
                className='w-4 h-4 flex-shrink-0'
              />
              <label htmlFor='gift-wrap' className='text-gray-700'>
                For <span className='font-semibold'>$10.00</span> Please Wrap
                The Product
              </label>
            </div>

            {/* Subtotal */}
            <div className='flex justify-between text-sm lg:text-lg mb-4'>
              <span className='font-medium text-gray-900'>Subtotal</span>
              <span className='font-semibold text-gray-900'>$100.00</span>
            </div>

            {/* Botón Checkout */}
            <ButtonLink
              to={'/checkout'}
              className='w-full flex justify-center items-center bg-black text-white rounded-md py-2 text-sm lg:text-lg'>
              Checkout
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Adicionales */}
      <div className='sm:py-12 lg:py-16'>
        <NewsletterSection />
      </div>
    </div>
  )
}
