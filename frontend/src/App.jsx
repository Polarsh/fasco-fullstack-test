import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import DefaultPage from './pages/Default'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<DefaultPage />} />
      </Routes>
    </>
  )
}
