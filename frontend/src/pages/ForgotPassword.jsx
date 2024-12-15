import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import InputField from '../components/form/InputField'

export default function ForgotPasswordPage() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    alert('Password reset link sent!')
    navigate('/sign-in')
  }

  return (
    <div className='flex min-h-screen max-w-screen-xl mx-auto'>
      {/* Imagen Izquierda */}
      <div className='relative hidden w-0 flex-1 lg:block'>
        <img
          alt='Forgot Password'
          src='/images/sign_in.png'
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
              Forgot your password?
            </h2>
            <p className='mt-2 text-sm/6 text-gray-500'>
              Enter your email to receive a reset link.
            </p>
          </div>

          {/* Formulario */}
          <div className='mt-10'>
            <form action='#' method='POST' className='space-y-6'>
              <InputField id='email' label='Email' type='email' />

              <button
                onClick={handleSubmit}
                type='submit'
                className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-my-gray'>
                Send Reset Link
              </button>
            </form>
          </div>

          {/* Enlace para volver al inicio de sesión */}
          <div className='mt-4 text-center'>
            <Link
              to={'/sign-in'}
              className='font-semibold text-[#5b86e5] hover:text-opacity-70'>
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
