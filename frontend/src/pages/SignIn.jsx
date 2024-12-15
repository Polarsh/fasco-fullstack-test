import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import InputField from '../components/form/InputField'

export default function SignInPage() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    navigate('/shop')
  }

  return (
    <>
      <div className='flex min-h-screen max-w-screen-xl mx-auto'>
        {/* Imagen Izquierda */}
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            alt=''
            src='/images/sign_in.png'
            className='absolute inset-0 size-full object-cover'
          />
        </div>

        {/* Contenido Derecho */}
        <div className='flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              {/* Logo */}
              <Logo className='h-6 w-auto sm:h-8' />

              <h2 className='mt-8 text-2xl/9 font-bold tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
              <p className='mt-2 text-sm/6 text-gray-500'>
                Not a member?{' '}
                <Link
                  to={'/sign-up'}
                  className='font-semibold text-[#5b86e5] hover:text-opacity-70'>
                  Register Now
                </Link>
              </p>
            </div>

            <div className='mt-10 space-y-6'>
              {/* Email Input */}
              <InputField id='email' label='Email' type='email' />

              {/* Password Input */}
              <InputField id='password' label='Password' type='password' />

              <div className='flex justify-end'>
                <Link
                  to={'/forgot-password'}
                  className='text-sm font-semibold text-[#5b86e5] hover:text-opacity-70'>
                  Forgot password?
                </Link>
              </div>

              <button
                onClick={handleSubmit}
                className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-my-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Sign in
              </button>
            </div>

            {/* Divider */}
            <div className='mt-10'>
              <div className='relative'>
                <div
                  aria-hidden='true'
                  className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-200' />
                </div>
                <div className='relative flex justify-center text-sm font-medium'>
                  <span className='bg-white px-6 text-gray-900'>
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Botones de Login */}
              <div className='mt-6 grid grid-cols-2 gap-4'>
                <Link
                  to='/shop'
                  className='flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                  <FcGoogle className='h-8 w-8' />
                  <span>Google</span>
                </Link>

                <Link
                  to='/shop'
                  className='flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                  <FaFacebook className='h-8 w-8' />
                  <span>Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
