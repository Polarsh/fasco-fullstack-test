export default function FeaturesSection() {
  const features = [
    {
      icon: '/icons/high_quality.svg',
      title: 'High Quality',
      description: 'Crafted from top materials',
    },
    {
      icon: '/icons/warranty.svg',
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      icon: '/icons/free_shipping.svg',
      title: 'Free Shipping',
      description: 'Order over 150 $',
    },
    {
      icon: '/icons/support.svg',
      title: '24 / 7 Support',
      description: 'Dedicated support',
    },
  ]

  return (
    <div className='bg-white py-12'>
      <div className='max-w-screen-xl mx-auto px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              {/* Icono */}
              <div className='flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4'>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className='w-8 h-8'
                />
              </div>

              {/* Título */}
              <h3 className='text-lg font-semibold text-gray-800'>
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className='text-sm text-gray-500 mt-2'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
