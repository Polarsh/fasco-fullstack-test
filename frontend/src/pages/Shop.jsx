import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

import FiltersSection from '../sections/Filters'
import Drawer from '../components/Drawer'
import { PlusIcon } from '@heroicons/react/24/outline'
import PeakyBlindersSection from '../sections/PeakyBlinders'
import FeaturesSection from '../sections/Features'
import FollowUsSection from '../sections/FollowUs'
import NewsletterSection from '../sections/Newsletter'

import products from '../data/products.json'

const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
  { name: 'Price: Low to High', href: '#' },
  { name: 'Price: High to Low', href: '#' },
]

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className='bg-white'>
      <Drawer open={mobileFiltersOpen} setOpen={setMobileFiltersOpen}>
        <FiltersSection />
      </Drawer>

      {/* Contenido */}
      <div className='mx-auto max-w-screen-xl px-4 lg:px-8 mt-8'>
        {/* Título principal */}
        <div className='py-8 px-4 text-center'>
          <h1 className='text-5xl font-serif font-bold text-black'>Fashion</h1>

          {/* Breadcrumb */}
          <nav className='flex justify-center items-center gap-2 mt-4 text-gray-600'>
            <Link to={'/'} className='hover:text-gray-800 transition'>
              Home
            </Link>
            <span className='text-gray-400'>›</span>
            <span className='text-black font-medium'>Fashion</span>
          </nav>
        </div>

        <div className='pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
          {/* Filtros */}
          <aside>
            <h2 className='sr-only'>Filters</h2>

            <button
              type='button'
              onClick={() => setMobileFiltersOpen(true)}
              className='inline-flex items-center lg:hidden'>
              <span className='text-sm font-medium text-gray-700'>Filters</span>
              <PlusIcon
                aria-hidden='true'
                className='ml-1 size-5 shrink-0 text-gray-400'
              />
            </button>

            <div className='hidden lg:block'>
              <FiltersSection />
            </div>
          </aside>

          {/* Products */}
          <section
            aria-labelledby='product-heading'
            className='mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3'>
            <h2 id='product-heading' className='sr-only'>
              Products
            </h2>

            {/* Filters */}
            <section aria-labelledby='filter-heading'>
              <h2 id='filter-heading' className='sr-only'>
                Product filters
              </h2>

              <div className='flex items-center justify-between'>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <MenuButton className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                      Sort
                      <ChevronDownIcon
                        aria-hidden='true'
                        className='-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500'
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className='absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
                    <div className='py-1'>
                      {sortOptions.map(option => (
                        <MenuItem key={option}>
                          <a
                            href={option.href}
                            className='block px-4 py-2 text-sm font-medium text-gray-900 data-[focus]:bg-gray-100 data-[focus]:outline-none'>
                            {option.name}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                <button
                  type='button'
                  className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'>
                  <span className='sr-only'>View grid</span>
                  <Squares2X2Icon aria-hidden='true' className='size-5' />
                </button>
              </div>
            </section>

            <div className='grid grid-cols-1 mt-6 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Adicionales */}
      <PeakyBlindersSection />
      <FeaturesSection />
      <FollowUsSection />
      <NewsletterSection />
    </div>
  )
}

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <Link to={`/product/${product.id}`} className='group'>
      <div className='relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
        {/* Imagen */}
        <div className='relative h-full w-full'>
          <img
            alt={product.name}
            src={product.img}
            className='h-full w-full bg-gray-200 object-cover group-hover:opacity-75'
          />

          {/* Circulo Sold Out */}
          {product.isSoldOut && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='h-16 w-16 bg-black text-white text-xs font-semibold rounded-full flex items-center justify-center'>
                Sold Out
              </div>
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className='flex flex-1 flex-col space-y-2 p-4'>
          <h3 className='text-sm font-medium text-gray-900'>{product.name}</h3>
          <div className='flex flex-1 flex-col justify-end'>
            <p className='text-base font-medium text-gray-900'>
              {product.price}
            </p>
          </div>
          {/* Círculos de colores */}
          <div className='flex gap-2'>
            {product.colors.map(color => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer border-2 ${
                  selectedColor === color ? 'border-black' : 'border-gray-200'
                }`}>
                <div
                  className='h-4 w-4 rounded-full'
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
