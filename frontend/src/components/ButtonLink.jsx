import { Link } from 'react-router-dom'

export default function ButtonLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`px-16 py-3 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-gray-800 transition ${className}`}>
      {children}
    </Link>
  )
}
