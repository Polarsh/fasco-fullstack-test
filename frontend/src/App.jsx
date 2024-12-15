import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import DefaultPage from './pages/Default'
import Layout from './layout/layout'

export default function App() {
  return (
    <>
      <Routes>
        {/* Rutas sin el Layout */}
        <Route path='/' element={<HomePage />} />

        {/* Rutas con el Layout */}
        <Route
          path='*'
          element={
            <Layout>
              <DefaultPage />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}
