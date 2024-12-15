import { Outlet } from 'react-router-dom'

import Footer from '../components/layout/Footer'
import NavBar from '../components/layout/NavBar'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
