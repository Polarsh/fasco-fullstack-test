import { useState } from 'react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function FiltersSection() {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [openBrands, setOpenBrands] = useState(true)
  const [openCollections, setOpenCollections] = useState(true)

  const sizes = ['S', 'M', 'L', 'XL']
  const colors = [
    '#FF5A5A',
    '#FFA500',
    '#E3FF77',
    '#A3FF77',
    '#72D7FF',
    '#6B8AFF',
    '#7C77FF',
    '#B177FF',
    '#FF77E7',
    '#FF8787',
  ]

  const brands = ['Minimog', 'Retrolie Brook', 'Learts', 'Vagabond', 'Abby']
  const collections = [
    'All products',
    'Best sellers',
    'New arrivals',
    'Accessories',
  ]
  const tags = [
    'Fashion',
    'Hats',
    'Sandal',
    'Belt',
    'Bags',
    'Snacker',
    'Denim',
    'Minimog',
    'Vagabond',
    'Sunglasses',
    'Beachwear',
  ]

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Filters</h2>

      {/* Size */}
      <div className='mb-6'>
        <h3 className='font-semibold mb-2'>Size</h3>
        <div className='flex gap-2'>
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border px-3 py-1 rounded ${
                selectedSize === size
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-200'
              }`}>
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className='mb-6'>
        <h3 className='font-semibold mb-2'>Colors</h3>
        <div className='flex flex-wrap gap-2'>
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-7 h-7 rounded-full border-2 ${
                selectedColor === color ? 'border-black' : 'border-gray-200'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Prices */}
      <div className='mb-6'>
        <h3 className='font-semibold mb-2'>Prices</h3>
        <ul className='text-gray-500'>
          {['$0-$50', '$50-$100', '$100-$150', '$150-$200', '$300-$400'].map(
            price => (
              <li key={price} className='hover:text-gray-800 cursor-pointer'>
                {price}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Brands */}
      <div className='mb-6'>
        <h3
          className='font-semibold mb-2 cursor-pointer flex justify-between items-center group'
          onClick={() => setOpenBrands(!openBrands)}>
          Brands
          <ChevronDownIcon
            aria-hidden='true'
            className={`size-5 transform transition-transform duration-300 ${
              openBrands ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </h3>
        {openBrands && (
          <ul className='text-gray-500'>
            {brands.map(brand => (
              <li key={brand} className='hover:text-gray-800 cursor-pointer'>
                {brand}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Collections */}
      <div className='mb-6'>
        <h3
          className='font-semibold mb-2 cursor-pointer flex justify-between items-center group'
          onClick={() => setOpenCollections(!openCollections)}>
          Collections
          <ChevronDownIcon
            aria-hidden='true'
            className={`size-5 transform transition-transform duration-300 ${
              openBrands ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </h3>
        {openCollections && (
          <ul className='text-gray-500'>
            {collections.map(collection => (
              <li
                key={collection}
                className='hover:text-gray-800 cursor-pointer'>
                {collection}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tags */}
      <div>
        <h3 className='font-semibold mb-2'>Tags</h3>
        <div className='flex flex-wrap gap-2'>
          {tags.map(tag => (
            <span
              key={tag}
              className='text-gray-500 text-sm cursor-pointer hover:text-gray-800'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
