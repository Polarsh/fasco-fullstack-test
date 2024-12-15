import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SelectField({ label, id, options, ...props }) {
  return (
    <div className='relative w-full'>
      {/* Select */}
      <select
        id={id}
        className='appearance-none bg-white text-my-gray w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-my-gray focus:border-my-gray'
        {...props}>
        <option value='' disabled selected>
          {label}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Icono Flecha */}
      <ChevronDownIcon
        className='absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none'
        aria-hidden='true'
      />
    </div>
  )
}
