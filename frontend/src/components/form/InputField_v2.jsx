export default function InputField({ label, id, type = 'text', ...props }) {
  return (
    <div className='relative w-full'>
      {/* Input */}
      <input
        id={id}
        type={type}
        className='w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-my-gray focus:border-my-gray'
        placeholder={label}
        {...props}
      />

      {/* Etiqueta como placeholder */}
      <label
        htmlFor={id}
        className='absolute left-3 top-2/4 -translate-y-2/4 text-gray-500 text-sm pointer-events-none'></label>
    </div>
  )
}
