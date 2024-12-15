export default function InputField({ label, id, type = 'text', ...props }) {
  return (
    <div className='relative w-full'>
      {/* Etiqueta */}
      <label
        htmlFor={id}
        className='absolute top-0 left-0 text-gray-500 text-sm font-medium transform scale-100 translate-y-2 transition-all peer-placeholder-shown:translate-y-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:scale-100 peer-focus:-translate-y-0 peer-focus:text-sm peer-focus:text-gray-500'>
        {label}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        className='peer w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gray-600 placeholder-transparent text-gray-800'
        placeholder=' ' // Espacio en blanco para activar placeholder-shown
        {...props}
      />
    </div>
  )
}
