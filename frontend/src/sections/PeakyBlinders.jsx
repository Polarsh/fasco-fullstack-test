import ButtonLink from '../components/ButtonLink'

export default function PeakyBlindersSection() {
  return (
    <div className='relative h-auto md:h-[600px] bg-[#dadada]'>
      {/* Fondo extendido con dos colores para desktop */}
      <div className='hidden md:flex absolute inset-0'>
        <div className='w-1/2 bg-[#f8f8f8]'></div>
        <div className='w-1/2 bg-[#dadada]'></div>
      </div>

      {/* Contenedor principal */}
      <div className='relative max-w-screen-xl mx-auto flex flex-col md:flex-row items-stretch h-full'>
        {/* Imagen */}
        <div className='flex-1 flex items-center justify-center bg-[#f8f8f8] md:bg-transparent'>
          <img
            src='/images/peaky_blinders.png'
            alt='Peaky Blinders'
            className='h-full object-cover'
          />
        </div>

        {/* Descripción */}
        <div className='flex-1 flex flex-col justify-center items-start p-6 md:p-12 bg-[#dadada]'>
          {/* Contenido de la descripción */}
          <div>
            {/* Colección */}
            <p className='text-sm uppercase text-gray-500'>Women Collection</p>

            {/* Título */}
            <h2 className='text-2xl md:text-4xl font-bold text-gray-800 mt-2'>
              Peaky Blinders
            </h2>

            {/* Subtítulo */}
            <h3 className='text-lg font-semibold text-gray-600 mt-4'>
              Description
            </h3>

            {/* Descripción */}
            <p className='text-gray-600 mt-2 text-sm md:text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>

            {/* Selector de tamaño */}
            <div className='flex items-center gap-4 mt-6'>
              <span className='text-base md:text-lg font-medium text-gray-800'>
                Size:
              </span>
              <button className='px-4 py-2 border rounded-md bg-black text-white hover:bg-gray-800 transition'>
                M
              </button>
            </div>

            {/* Precio */}
            <p className='text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-6'>
              $100.00
            </p>

            {/* Botón de compra */}
            <ButtonLink to='/shop'>Buy Now</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
