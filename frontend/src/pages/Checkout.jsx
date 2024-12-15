import ButtonLink from '../components/ButtonLink'
import InputField from '../components/form/InputField_v2'
import SelectField from '../components/form/SelectField'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const paymentMethods = [
  { value: 'credit', label: 'Credit Card' },
  { value: 'debit', label: 'Debit Card' },
  { value: 'paypal', label: 'PayPal' },
]

export default function CheckoutPage() {
  return (
    <main className='mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:max-w-none'>
        <h1 className='sr-only'>Checkout</h1>

        <form className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
          {/* Sección de Información */}
          <div>
            {/* Contacto */}
            <div>
              <h2 className='text-xl font-bold text-gray-900'>
                Contact information
              </h2>
              <div className='mt-4'>
                <InputField
                  label='Email address'
                  id='email-address'
                  type='email'
                  autoComplete='email'
                />
              </div>
            </div>

            {/* Información de Envío */}
            <div className='mt-10 border-t border-gray-200 pt-10'>
              <h2 className='text-xl font-bold text-gray-900'>
                Shipping information
              </h2>

              <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                <InputField
                  label='First name'
                  id='first-name'
                  autoComplete='given-name'
                />
                <InputField
                  label='Last name'
                  id='last-name'
                  autoComplete='family-name'
                />
                <InputField label='Company' id='company' />
                <InputField
                  label='Address'
                  id='address'
                  autoComplete='street-address'
                />
                <InputField
                  label='Apartment, suite, etc.'
                  id='apartment'
                  placeholder='Optional'
                />
                <InputField
                  label='City'
                  id='city'
                  autoComplete='address-level2'
                />

                <SelectField
                  id='country'
                  label='Country / Region'
                  options={[
                    { value: 'us', label: 'United States' },
                    { value: 'ca', label: 'Canada' },
                    { value: 'mx', label: 'Mexico' },
                  ]}
                />

                <InputField
                  label='State / Province'
                  id='region'
                  autoComplete='address-level1'
                />
                <InputField
                  label='Postal code'
                  id='postal-code'
                  autoComplete='postal-code'
                />
                <InputField label='Phone' id='phone' autoComplete='tel' />
              </div>
            </div>

            {/* Sección de Pago */}
            <div className='mt-10 border-t border-gray-200 pt-10'>
              <h2 className='text-xl font-bold text-gray-900'>Payment</h2>

              {/* Select para método de pago */}
              <div className='mt-4'>
                <SelectField
                  id='payment-method'
                  label='Payment method'
                  options={paymentMethods}
                  icon={<ChevronDownIcon className='h-5 w-5 text-gray-500' />}
                />
              </div>

              {/* Campos adicionales */}
              <div className='mt-6 grid grid-cols-4 gap-x-4 gap-y-6'>
                {/* Número de tarjeta */}
                <div className='col-span-4'>
                  <InputField
                    id='card-number'
                    label='Card number'
                    placeholder='1234 5678 9012 3456'
                    type='text'
                  />
                </div>

                {/* Nombre en tarjeta */}
                <div className='col-span-4'>
                  <InputField
                    id='name-on-card'
                    label='Name on card'
                    placeholder='John Doe'
                    type='text'
                  />
                </div>

                {/* Fecha de expiración */}
                <div className='col-span-2'>
                  <InputField
                    id='expiration-date'
                    label='Expiration date (MM/YY)'
                    placeholder='MM/YY'
                    type='text'
                  />
                </div>

                {/* CVC */}
                <div className='col-span-2'>
                  <InputField
                    id='cvc'
                    label='CVC'
                    placeholder='123'
                    type='text'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resumen del Pedido */}
          <div className='mt-10 lg:mt-0'>
            <h2 className='text-lg font-medium text-gray-900'>Order summary</h2>
            <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
              {/* Productos en el Carrito */}
              <ul className='divide-y divide-gray-200'>
                <li className='flex px-4 py-6 sm:px-6'>
                  <img
                    src='/images/products/product_6.png'
                    alt='Mini Dress'
                    className='w-auto h-32 rounded-md'
                  />
                  <div className='ml-6 flex-1'>
                    <h4 className='text-lg font-bold text-gray-700'>
                      Mini Dress
                    </h4>
                    <p className='text-base text-gray-500'>Color: Red</p>
                    <p className='text-base text-gray-500'>Size: M</p>
                  </div>
                  <p className='text-lg font-medium text-gray-900'>$14.90</p>
                </li>
              </ul>

              {/* Código de Descuento */}
              <div className='border-t border-gray-200 px-4 py-4 sm:px-6'>
                <h4 className='text-sm font-medium text-gray-900'>
                  Discount code
                </h4>
                <div className='mt-2 flex'>
                  <InputField
                    id='code'
                    label='Discount code'
                    placeholder='Enter code'
                    type='text'
                  />
                  <button
                    type='button'
                    className='rounded-r-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'>
                    Apply
                  </button>
                </div>
              </div>

              {/* Resumen de Precios */}
              <dl className='space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6'>
                <div className='flex justify-between'>
                  <dt className='text-sm'>Subtotal</dt>
                  <dd className='text-sm font-medium text-gray-900'>$64.00</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-sm'>Shipping</dt>
                  <dd className='text-sm font-medium text-gray-900'>$5.00</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-sm'>Taxes</dt>
                  <dd className='text-sm font-medium text-gray-900'>$5.52</dd>
                </div>
                <div className='flex justify-between border-t border-gray-200 pt-6'>
                  <dt className='text-base font-medium'>Total</dt>
                  <dd className='text-base font-medium text-gray-900'>
                    $75.52
                  </dd>
                </div>
              </dl>

              {/* Botón Confirmar */}
              <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                <ButtonLink className=' w-full flex justify-center text-center'>
                  Confirm order
                </ButtonLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
