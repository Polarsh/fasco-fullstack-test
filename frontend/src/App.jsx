import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import DefaultPage from './pages/Default'
import Layout from './layout/layout'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import ForgotPasswordPage from './pages/ForgotPassword'
import ShopPage from './pages/Shop'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'

import ScrollToTop from './hook/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* Hook que reinicia el scroll */}
      <Routes>
        {/* Ruta sin el Layout */}
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />

        {/* Rutas con el Layout */}
        <Route element={<Layout />}>
          <Route path='/shop' element={<ShopPage />} />
          <Route
            path='/product/'
            element={<Navigate to='/product/1' replace />}
          />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='*' element={<DefaultPage />} />
        </Route>
      </Routes>
    </>
  )
}
