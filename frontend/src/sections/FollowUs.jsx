export default function FollowUsSection() {
  const images = [
    { src: '/images/follow_us/image_1.png', width: 308, height: 340 },
    { src: '/images/follow_us/image_2.png', width: 256, height: 380 },
    { src: '/images/follow_us/image_3.png', width: 256, height: 380 },
    { src: '/images/follow_us/image_4.png', width: 308, height: 340 },
    { src: '/images/follow_us/image_5.png', width: 320, height: 308 },
    { src: '/images/follow_us/image_6.png', width: 320, height: 308 },
  ]

  return (
    <div className='bg-white py-12 bg-gradient-to-b from-[#fafafa] to-white'>
      <div className='max-w-screen-xl mx-auto px-4'>
        {/* Header */}
        <h2 className='text-4xl font-bold text-gray-800 text-center'>
          Follow Us On Instagram
        </h2>
        <p className='text-gray-600 text-center mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>

        {/* Galería Responsiva */}
        <div className='mt-8 flex flex-wrap justify-center gap-4'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative rounded-lg shadow-lg overflow-hidden'
              style={{
                width: `${image.width}px`,
                height: `${image.height}px`,
              }}>
              <img
                src={image.src}
                alt={`Instagram ${index + 1}`}
                className='w-full h-full object-cover object-top'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
