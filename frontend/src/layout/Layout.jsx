import Footer from '../components/layout/Footer'
import NavBar from '../components/layout/NavBar'

export default function Layout({ children }) {
  return (
    <div className='bg-gray-100 h-screen flex flex-col'>
      <NavBar />
      <main className='flex-grow p-4'>{children}</main>
      <Footer />
    </div>
  )
}
