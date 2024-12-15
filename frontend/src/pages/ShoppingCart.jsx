import { Link } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'

export default function ShoppingCart() {
  return (
    <div className='h-full flex flex-col bg-white p-4'>
      {/* Header */}
      <div className='flex items-center justify-between pb-4 border-b'>
        <h2 className='text-xl font-semibold'>Shopping Cart</h2>
      </div>

      {/* Free Shipping Notice */}
      <div className='text-gray-700 text-sm py-4'>
        Buy <span className='font-semibold'>$122.35</span> More And Get{' '}
        <span className='font-semibold'>Free Shipping</span>
      </div>

      {/* Cart Item */}
      <div className='flex gap-4 border-b py-4'>
        {/* Imagen del producto */}
        <img
          src='/images/products/product_6.png'
          alt='Denim Jacket'
          className='w-20 h-24 object-cover'
        />
        {/* Información del producto */}
        <div className='flex-1'>
          <h3 className='font-medium text-sm'>Denim Jacket</h3>
          <p className='text-xs text-gray-500'>Color: Red</p>
          <p className='font-semibold text-sm mt-1'>$14.80</p>

          {/* Controles de cantidad */}
          <div className='flex items-center gap-2 mt-2'>
            <button className='h-8 w-8 border rounded text-gray-600'>-</button>
            <span className='h-8 w-10 flex items-center justify-center border'>
              01
            </span>
            <button className='h-8 w-8 border rounded text-gray-600'>+</button>
          </div>
        </div>
      </div>

      {/* Gift Wrap */}
      <div className='flex items-center gap-2 py-4 border-b'>
        <input type='checkbox' id='gift-wrap' className='w-5 h-5' />
        <label htmlFor='gift-wrap' className='text-sm text-gray-700'>
          For <span className='font-semibold'>$10.00</span> Please Wrap The
          Product
        </label>
      </div>

      {/* Subtotal */}
      <div className='flex justify-between items-center py-4'>
        <span className='text-lg font-medium'>Subtotal</span>
        <span className='text-lg font-semibold'>$100.00</span>
      </div>

      {/* Checkout Button */}
      <div className='mt-auto'>
        <ButtonLink to={'/checkout'} className='flex w-full justify-center'>
          Checkout
        </ButtonLink>
      </div>

      {/* View Cart */}
      <div className='text-center pt-2'>
        <Link to='/cart' className='text-sm text-gray-700 underline'>
          View Cart
        </Link>
      </div>
    </div>
  )
}
