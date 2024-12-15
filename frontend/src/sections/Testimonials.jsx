import { useState } from 'react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      img: '/images/testimonials/image_1.png',
      quote:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      name: 'James K.',
      role: 'Traveler',
      rating: 5,
    },
    {
      id: 2,
      img: '/images/testimonials/image_2.png',
      quote:
        'Exactly what I was looking for. Thank you for making it painless, pleasant, and most of all hassle-free! All features are great.',
      name: 'Susan W.',
      role: 'Designer',
      rating: 4,
    },
    {
      id: 3,
      img: '/images/testimonials/image_3.png',
      quote:
        'This is simply unbelievable! I would gladly pay over 600 dollars for your product. It is the most valuable business resource.',
      name: 'Sam T.',
      role: 'Developer',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='bg-[#fafafa] py-12 min-h-[550px]'>
      <div className='max-w-screen-xl mx-auto px-4 overflow-hidden'>
        {/* Header */}
        <h2 className='text-4xl font-bold text-gray-800 text-center'>
          This Is What Our Customers Say
        </h2>
        <p className='text-gray-600 text-center mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis.
        </p>

        {/* Carrusel */}
        <div className='relative mt-64 md:mt-48 min-h-48 mx-auto'>
          <div className='flex justify-center items-center relative w-full'>
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex
              const isPrev =
                index ===
                (currentIndex - 1 + testimonials.length) % testimonials.length
              const isNext = index === (currentIndex + 1) % testimonials.length

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-full max-w-3xl transition-transform duration-700 ease-in-out ${
                    isActive
                      ? 'translate-x-0 scale-100 opacity-100 z-10'
                      : isPrev
                        ? '-translate-x-56 scale-90 opacity-50 z-0'
                        : isNext
                          ? 'translate-x-56 scale-90 opacity-50 z-0'
                          : 'hidden'
                  }`}>
                  <div
                    className='bg-white h-full rounded-lg shadow-lg p-8 mx-auto flex flex-col md:flex-row items-center gap-12'
                    style={{
                      maxWidth: '850px', // Ancho máximo fijo
                      width: '100%', // Para asegurar que sea responsive en pantallas pequeñas
                    }}>
                    {/* Imagen */}
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className='w-24 h-24 md:w-48 md:h-48 object-cover'
                    />

                    <div className='flex flex-col items-center'>
                      <p className='text-my-gray  text-base'>
                        &rdquo;{testimonial.quote}&rdquo;
                      </p>
                      {/* Rating */}
                      <div className='flex mt-4 justify-start w-full'>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
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
                      <div className='w-full border-t border-gray-300 mt-8 mb-4'></div>
                      <div className=' justify-start w-full'>
                        <h3 className='text-2xl justify-start font-bold text-gray-800'>
                          {testimonial.name}
                        </h3>
                        <p className='text-sm text-gray-500'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Botones del carrusel */}
        <div className='flex gap-8 justify-center w-full mt-12 md:mt-0'>
          <button
            onClick={prevSlide}
            className='w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-md hover:bg-gray-100'>
            ‹
          </button>
          <button
            onClick={nextSlide}
            className='w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-md hover:bg-gray-100'>
            ›
          </button>
        </div>
      </div>
    </div>
  )
}
