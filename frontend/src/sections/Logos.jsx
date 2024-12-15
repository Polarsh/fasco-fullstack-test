export default function LogosSection() {
  const logos = [
    { src: '/logos/chanel.png', alt: 'Chanel' },
    { src: '/logos/louis_vuitton.png', alt: 'Louis Vuitton' },
    { src: '/logos/prada.png', alt: 'Prada' },
    { src: '/logos/calvin_klein.png', alt: 'Calvin Klein' },
    { src: '/logos/denim.png', alt: 'Denim' },
  ]

  return (
    <div className='bg-white py-8'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center'>
        {logos.map((logo, index) => (
          <div key={index} className='flex justify-center items-center'>
            <img
              src={logo.src}
              alt={logo.alt}
              className='w-full max-w-[196px] object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
