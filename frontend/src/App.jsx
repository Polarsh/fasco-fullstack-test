import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import DefaultPage from './pages/Default'
import Layout from './layout/layout'

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<DefaultPage />} />
        </Routes>
      </Layout>
    </>
  )
}
