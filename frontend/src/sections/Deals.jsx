import { useState } from 'react'
import ButtonLink from '../components/ButtonLink'
import Countdown from '../components/Countdown'

export default function DealsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      src: '/images/deals/spring_sale.png',
      label: 'Spring Sale',
      discount: '30% OFF',
    },
    {
      src: '/images/deals/summer_sale.png',
      label: 'Summer Sale',
      discount: '40% OFF',
    },
    {
      src: '/images/deals/autumn_sale.jpg',
      label: 'Autumn Sale',
      discount: '50% OFF',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div id='deals' className='bg-[#fbfbfb] py-32'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* Texto y botón */}
        <div className='flex flex-col justify-center items-start'>
          <h2 className='text-5xl font-bold text-gray-800'>
            Deals Of The Month
          </h2>
          <p className='py-6 text-gray-600 text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin.
          </p>

          <ButtonLink to={'/shop'}>Buy Now</ButtonLink>

          {/* Contador */}
          <Countdown />
        </div>

        {/* Carrusel */}
        <div className='relative'>
          {/* Contenedor del carrusel */}
          <div
            className='relative w-full overflow-hidden rounded-lg shadow-lg'
            style={{ height: '850px' }}>
            <div
              className='flex transition-transform duration-700 ease-in-out'
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}>
              {slides.map((slide, index) => (
                <div key={index} className='flex-shrink-0 w-full h-[850px]'>
                  <img
                    src={slide.src}
                    alt={slide.label}
                    className='w-full h-full object-cover rounded-md'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Texto del carrusel */}
          <div className='absolute bottom-4 left-4 z-20 bg-white p-8 shadow-lg w-[350px] min-h-[180px] flex flex-col justify-center'>
            <p className='text-2xl font-medium text-gray-600'>
              {`${currentSlide + 1} — ${slides[currentSlide].label}`}
            </p>
            <p className='text-4xl font-bold text-gray-800'>
              {slides[currentSlide].discount}
            </p>
          </div>

          {/* Botones del carrusel */}
          <div className='absolute inset-0 flex justify-between items-center px-4'>
            <button
              onClick={prevSlide}
              className='w-10 h-10 z-20 flex justify-center items-center bg-white rounded-full shadow-md hover:bg-gray-100'>
              ‹
            </button>
            <button
              onClick={nextSlide}
              className='w-10 h-10 z-20 flex justify-center items-center bg-white rounded-full shadow-md hover:bg-gray-100'>
              ›
            </button>
          </div>

          {/* Indicadores */}
          <div className='flex justify-center gap-2 mt-4'>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                }`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
