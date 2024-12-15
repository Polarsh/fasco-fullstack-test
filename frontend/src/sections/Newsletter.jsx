import ButtonLink from '../components/ButtonLink'

export default function NewsletterSection() {
  return (
    <div className='relative max-w-screen-xl mx-auto bg-white py-16 h-[700px]'>
      {/* Imágenes laterales */}
      <div className='absolute top-0 left-0 h-full w-[30%] hidden lg:block'>
        <img
          src='/images/newsletter/model_left.png'
          alt='Left Model'
          className='h-full w-auto object-cover mx-auto'
        />
      </div>
      <div className='absolute top-0 right-0 h-full w-[30%] hidden lg:block'>
        <img
          src='/images/newsletter/model_right.png'
          alt='Right Model'
          className='h-full w-auto object-cover mx-auto'
        />
      </div>

      {/* Contenido principal */}
      <div className='relative flex flex-col justify-center items-center h-full w-full'>
        {/* Título */}
        <h2 className='text-4xl font-bold text-gray-800'>
          Subscribe To Our Newsletter
        </h2>
        <p className='text-gray-600 mt-4 text-lg max-w-lg mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>
        {/* Formulario */}
        <div className='my-8 flex justify-center w-full'>
          <input
            type='email'
            placeholder='michael@ymail.com'
            className='w-full max-w-md px-6 py-3 border border-gray-300 rounded-l-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800'
          />
        </div>
        <ButtonLink to={'/shop'}>Subscribe Now</ButtonLink>
      </div>
    </div>
  )
}
