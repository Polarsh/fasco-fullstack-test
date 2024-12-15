import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import InputField from '../components/form/InputField'

export default function SignUpPage() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    navigate('/shop/')
  }

  return (
    <div className='flex min-h-screen max-w-screen-xl mx-auto'>
      {/* Imagen Izquierda */}
      <div className='relative hidden w-0 flex-1 lg:block'>
        <img
          alt='Sign Up'
          src='/images/sign_up.png'
          className='absolute inset-0 size-full object-cover'
        />
      </div>

      {/* Contenido Derecho */}
      <div className='flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          {/* Encabezado */}
          <div>
            <Logo className='h-6 w-auto sm:h-8' />
            <h2 className='mt-8 text-2xl/9 font-bold tracking-tight text-gray-900'>
              Create your account
            </h2>
            <p className='mt-2 text-sm/6 text-gray-500'>
              Already have an account?{' '}
              <Link
                to={'/sign-in'}
                className='font-semibold text-[#5b86e5] hover:text-opacity-70'>
                Sign In
              </Link>
            </p>
          </div>

          {/* Formulario */}
          <div className='mt-10 w-full'>
            <form
              action='#'
              method='POST'
              className='gap-y-6 gap-x-4 grid grid-cols-1 md:grid-cols-2'>
              {/* Campos del Formulario */}
              <InputField id='firstName' label='First Name' type='text' />
              <InputField id='lastName' label='Last Name' type='text' />
              <InputField id='email' label='Email' type='email' />
              <InputField id='phone' label='Phone Number' type='text' />
              <InputField id='password' label='Password' type='password' />
              <InputField
                id='confirm-password'
                label='Confirm Password'
                type='password'
              />

              {/* Botón Sign Up */}
              <div className='col-span-1 md:col-span-2'>
                <button
                  onClick={handleSubmit}
                  type='submit'
                  className='w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-my-gray'>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
