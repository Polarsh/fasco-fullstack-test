import { useState } from 'react'
import ButtonLink from '../components/ButtonLink'

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  'Women Accessories',
  'Men Accessories',
  'Discount Deals',
]

const products = [
  {
    id: 1,
    name: 'Shiny Dress',
    brand: 'Al Karam',
    price: '$95.50',
    reviews: '(4.1k) Customer Reviews',
    status: 'Almost Sold Out',
    img: '/images/arrivals/arrivals_1.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Long Dress',
    brand: 'Al Karam',
    price: '$95.50',
    reviews: '(4.1k) Customer Reviews',
    status: 'Almost Sold Out',
    img: '/images/arrivals/arrivals_2.png',
    rating: 4,
  },
  {
    id: 3,
    name: 'Full Sweater',
    brand: 'Al Karam',
    price: '$95.50',
    reviews: '(4.1k) Customer Reviews',
    status: 'Almost Sold Out',
    img: '/images/arrivals/arrivals_3.png',
    rating: 3,
  },
  {
    id: 4,
    name: 'White Dress',
    brand: 'Al Karam',
    price: '$95.50',
    reviews: '(4.1k) Customer Reviews',
    status: 'Almost Sold Out',
    img: '/images/arrivals/arrivals_4.png',
    rating: 5,
  },
  {
    id: 5,
    name: 'Colorful Dress',
    brand: 'Al Karam',
    price: '$95.50',
    reviews: '(4.1k) Customer Reviews',
    status: 'Almost Sold Out',
    img: '/images/arrivals/arrivals_5.png',
    rating: 4,
  },
  {
    id: 6,
    name: 'White Shirt',
    brand: 'Al Karam',
    price: '$95.50',
    reviews: '(4.1k) Customer Reviews',
    status: 'Almost Sold Out',
    img: '/images/arrivals/arrivals_6.png',
    rating: 5,
  },
]

export default function NewArrivalsSection() {
  const [selectedCategory, setSelectedCategory] = useState(1)

  return (
    <div className='bg-white py-12'>
      <div className='max-w-screen-xl mx-auto px-4'>
        {/* Header */}
        <h2 className='text-4xl font-bold text-gray-800 text-center'>
          New Arrivals
        </h2>
        <p className='text-gray-600 text-center mt-4 max-w-2xl mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>

        {/* Categories */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8'>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-4 py-2 rounded-lg text-gray-800 font-medium shadow ${
                selectedCategory === index
                  ? 'bg-black text-white'
                  : 'bg-[#fafafa] hover:bg-gray-200'
              } transition`}>
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {products.map(product => (
            <div
              key={product.id}
              className='bg-white rounded-lg shadow-lg overflow-hidden'>
              {/* Product Image */}
              <div className='p-4 pb-0 border-gray-200 rounded-lg'>
                <img
                  src={product.img}
                  alt={product.name}
                  className='w-full h-56 object-cover object-top'
                />
              </div>

              {/* Product Info */}
              <div className='p-4'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-lg font-bold text-gray-800'>
                    {product.name}
                  </h3>
                  <div className='flex'>
                    {/* Mostrar estrellas llenas y vacías */}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < product.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.792a1 1 0 00.95.69h5.032c.969 0 1.371 1.24.588 1.81l-4.073 2.96a1 1 0 00-.364 1.118l1.562 4.792c.3.921-.755 1.688-1.538 1.118l-4.073-2.96a1 1 0 00-1.175 0l-4.073 2.96c-.783.57-1.838-.197-1.538-1.118l1.562-4.792a1 1 0 00-.364-1.118L.341 9.22c-.783-.57-.38-1.81.588-1.81h5.032a1 1 0 00.95-.69L9.049 2.927z' />
                        </svg>
                      ))}
                  </div>
                </div>

                <p className='text-sm text-gray-500'>{product.brand}</p>

                {/* Reviews */}
                <p className='mt-2 text-sm text-gray-500'>{product.reviews}</p>

                {/* Price and Status */}
                <div className='flex justify-between items-center mt-4'>
                  <span className='text-xl font-bold text-gray-800'>
                    {product.price}
                  </span>
                  <span className='text-sm text-red-500'>{product.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className='flex justify-center mt-12'>
          <ButtonLink to={'/shop'}>View More</ButtonLink>
        </div>
      </div>
    </div>
  )
}
