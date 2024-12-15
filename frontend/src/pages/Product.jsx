import { useEffect, useState } from 'react'

import {
  FaCcAmex,
  FaCcApplePay,
  FaCcMastercard,
  FaRegEye,
  FaShippingFast,
} from 'react-icons/fa'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { AiOutlineStar } from 'react-icons/ai'
import { CiShare2 } from 'react-icons/ci'
import { LuArrowUpDown } from 'react-icons/lu'
import { FaCcPaypal } from 'react-icons/fa'
import { BsBox2 } from 'react-icons/bs'
import { RiVisaLine } from 'react-icons/ri'
import PeakyBlindersSection from '../sections/PeakyBlinders'
import NewsletterSection from '../sections/Newsletter'
import DealsSection from '../sections/Deals'
import FeaturesSection from '../sections/Features'
import { useParams } from 'react-router-dom'

import products from '../data/products.json'
import Drawer from '../components/Drawer'
import ShoppingCart from './ShoppingCart'

const colors = [
  { name: 'Blue', hex: '#90c2e7' },
  { name: 'Black', hex: '#000000' },
  { name: 'Pink', hex: '#f3c6d9' },
]

const sizes = ['M', 'L', 'XL', 'XXL']

const ProductPage = () => {
  const { productId } = useParams()

  const [selectedImage, setSelectedImage] = useState(
    products[productId - 1].img
  )
  const [selectedColor, setSelectedColor] = useState('Blue')
  const [quantity, setQuantity] = useState(1)

  const [shoppingCarOpen, setShoppingCarOpen] = useState(false)

  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 5,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime
        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 }
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 }
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 }
        clearInterval(timer)
        return prevTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className=''>
      {/* Shopping Cart */}
      <Drawer open={shoppingCarOpen} setOpen={setShoppingCarOpen}>
        <ShoppingCart />
      </Drawer>
      {/* Contenido */}
      <div className='container max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Columna Izquierda: Imágenes */}
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            {products.map((product, idx) => (
              <img
                key={idx}
                src={product.img}
                alt='Thumbnail'
                onClick={() => setSelectedImage(product.img)}
                className={`w-16 h-24 object-cover rounded cursor-pointer border ${
                  selectedImage === product.img
                    ? 'border-black'
                    : 'border-gray-300'
                }`}
              />
            ))}
          </div>
          <div className='flex-1'>
            <img
              src={selectedImage}
              alt='Main product'
              className='w-full rounded-lg object-cover'
            />
          </div>
        </div>

        {/* Columna Derecha: Información del Producto */}
        <div className='space-y-6'>
          {/* Título */}
          <div>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='text-sm text-gray-500'>FASCO</h3>
                <h1 className='text-2xl font-bold'>Denim Jacket</h1>
              </div>
              <button className='text-gray-400 hover:text-black'>
                <AiOutlineStar size={24} />
              </button>
            </div>

            {/* Reseñas */}
            <div className='flex items-center gap-1 mt-2'>
              <span className='text-yellow-400 text-lg'>★★★★☆</span>
              <span className='text-gray-500 text-sm'>(3)</span>
            </div>
          </div>

          {/* Precio */}
          <div className='flex items-center mt-2 gap-2'>
            <span className='text-2xl font-bold'>$39.00</span>
            <span className='text-gray-400 line-through'>$59.00</span>
            <span className='text-xs font-bold text-white bg-red-500 px-2 py-1 rounded'>
              SAVE 33%
            </span>
          </div>

          {/* Usuarios viendo */}
          <div className='flex items-center gap-2 text-gray-500 mt-3'>
            <FaRegEye size={20} />
            <span>24 people are viewing this right now</span>
          </div>

          {/* Temporizador */}
          <div className='flex justify-between mt-4 p-3 bg-red-100 text-red-600 border border-red-200 rounded-md'>
            <span className='font-bold flex items-center'>
              Hurry up! Sale ends in:
            </span>
            <div className='flex justify-center text-2xl font-bold gap-2'>
              <span>{String(timeLeft.hours).padStart(2, '0')}</span> :
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span> :
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Stock */}
          <div className='mt-4'>
            <p className='text-gray-500 text-sm'>
              Only <span className='text-red-600 font-bold'>9</span> item(s)
              left in stock!
            </p>
            <div className='relative w-full bg-gray-200 h-1 rounded mt-2'>
              <div className='absolute top-0 left-0 bg-red-500 h-1 rounded w-1/6'></div>
            </div>
          </div>

          {/* Tamaño */}
          <div>
            <h4 className='font-semibold'>
              Size: <span className='text-black'>{selectedSize}</span>
            </h4>
            <div className='flex gap-2 mt-2'>
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded transition ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colores */}
          <div>
            <h4 className='font-semibold'>Color: {selectedColor}</h4>
            <div className='flex gap-2 mt-2'>
              {colors.map(color => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`h-8 w-8 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                    selectedColor === color.name
                      ? 'border-black'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}></div>
              ))}
            </div>
          </div>

          {/* Quantity & Button */}
          <div>
            <h4 className='font-semibold'>Quantity</h4>
            <div className='flex items-center gap-4 mt-2'>
              {/* Selector de cantidad */}
              <div className='flex items-center border border-gray-300 rounded-md'>
                <button
                  onClick={() => {
                    setQuantity(prev => prev - 1)
                  }}
                  className='h-10 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-100'>
                  –
                </button>
                <span className='px-4 text-gray-800'>{quantity}</span>
                <button
                  onClick={() => {
                    setQuantity(prev => prev + 1)
                  }}
                  className='h-10 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-100'>
                  +
                </button>
              </div>

              {/* Botón de agregar al carrito */}
              <button
                type='button'
                onClick={() => {
                  setShoppingCarOpen(true)
                }}
                className='flex-1 h-10 border border-gray-400 rounded-md text-gray-800 font-semibold hover:bg-gray-100 transition'>
                Add to cart
              </button>
            </div>
          </div>

          {/* Información Extra */}
          <div className='flex gap-4 text-sm text-gray-600 mt-4'>
            <span className=' flex gap-2'>
              <LuArrowUpDown className='text-2xl text-gray-800' />
              Compare
            </span>
            <span className=' flex gap-2'>
              <IoIosHelpCircleOutline className='text-2xl text-gray-800' />
              Ask a question
            </span>
            <span className=' flex gap-2'>
              <CiShare2 className='text-2xl text-gray-800' />
              Share
            </span>
          </div>

          {/* Garantía */}
          <div className='mt-6 border-t pt-4 text-sm text-gray-700 space-y-2'>
            <p className='flex gap-3'>
              <FaShippingFast className='text-2xl text-gray-800' />
              <strong>Estimated Delivery:</strong> Jul 30 - Aug 03
            </p>
            <p className='flex gap-3'>
              <BsBox2 className='text-2xl text-gray-800' />
              <strong>Free Shipping & Returns:</strong> On all orders over $75
            </p>
          </div>

          {/* Métodos de Pago */}
          <div className=' bg-[#f8f8f8] py-8'>
            <div className='flex justify-center gap-6'>
              <div className='flex flex-col items-center'>
                <RiVisaLine className='text-4xl text-gray-800' />
              </div>
              <div className='flex flex-col items-center'>
                <FaCcMastercard className='text-4xl text-gray-800' />
              </div>
              <div className='flex flex-col items-center'>
                <FaCcPaypal className='text-4xl text-gray-800' />
              </div>
              <div className='flex flex-col items-center'>
                <FaCcApplePay className='text-4xl text-gray-800' />
              </div>
              <div className='flex flex-col items-center'>
                <FaCcAmex className='text-4xl text-gray-800' />
              </div>
            </div>
            <strong className='mt-6 text-my-gray w-full flex justify-center'>
              Guarantee safe & secure checkout
            </strong>
          </div>
        </div>
      </div>
      {/* Adicionales */}
      <PeakyBlindersSection />
      <FeaturesSection />
      <DealsSection />
      <div className=' mt-16 mb-8'>
        <NewsletterSection />
      </div>
    </div>
  )
}

export default ProductPage
