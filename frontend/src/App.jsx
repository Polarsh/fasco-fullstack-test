import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import DefaultPage from './pages/Default'
import Layout from './layout/layout'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import ForgotPasswordPage from './pages/ForgotPassword'

export default function App() {
  return (
    <Routes>
      {/* Ruta sin el Layout */}
      <Route path='/' element={<HomePage />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />

      {/* Rutas con el Layout */}
      <Route element={<Layout />}>
        <Route path='*' element={<DefaultPage />} />
      </Route>
    </Routes>
  )
}
