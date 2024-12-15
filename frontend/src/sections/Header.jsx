import BoxContainer from '../components/BoxContainer'
import ButtonLink from '../components/ButtonLink'

export default function HeaderSection() {
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-6 items-center'>
        {/** Solo visible en pantallas grandes */}
        <div className='hidden lg:flex'>
          <BoxContainer width='392px' height='756px' bgColor='#e0e0e0'>
            <img
              src='/images/header/left_image.png'
              alt='Model Left'
              className='w-auto h-full object-contain object-bottom'
            />
          </BoxContainer>
        </div>

        {/* Columna central */}
        <div className='flex flex-col justify-between gap-4 w-full p-4 md:p-0'>
          {/* Central - Arriba */}
          <div className='flex justify-center'>
            <BoxContainer width='426px' height='auto'>
              <img
                src='/images/header/top_image.png'
                alt='Model Central Top'
                className='w-auto h-full object-contain object-bottom'
              />
            </BoxContainer>
          </div>

          {/* Central - Central */}
          <div className='flex flex-col items-center justify-center'>
            <BoxContainer width='426px' height='auto' bgColor='transparent'>
              <img
                src='/images/header/central_text.png'
                alt='Model Central Text'
                className='w-auto h-full object-contain object-bottom px-4 md:px-0'
              />
            </BoxContainer>

            {/* Subtítulo */}
            <p className='text-lg lg:text-2xl font-medium text-gray-500 uppercase tracking-wider mt-4'>
              NEW COLLECTION
            </p>

            {/* Botón */}
            <ButtonLink to='/shop' className='mt-6'>
              SHOP NOW
            </ButtonLink>
          </div>

          {/* Central - Abajo */}
          <div className='flex justify-center'>
            <BoxContainer width='426px' height='auto'>
              <img
                src='/images/header/bottom_image.png'
                alt='Model Central Bottom'
                className='w-auto h-full object-contain object-bottom'
              />
            </BoxContainer>
          </div>
        </div>

        {/* Columna derecha (oculta en dispositivos pequeños y medianos) */}
        {/** Solo visible en pantallas grandes */}
        <div className='hidden lg:flex'>
          <BoxContainer width='392px' height='756px' bgColor='#e0e0e0'>
            <img
              src='/images/header/right_image.png'
              alt='Model Right'
              className='w-auto h-3/4 object-contain object-bottom'
            />
          </BoxContainer>
        </div>
      </div>
    </div>
  )
}
