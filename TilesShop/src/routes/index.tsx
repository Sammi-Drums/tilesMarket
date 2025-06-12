// src/routes/index.tsx
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import MaterialDetail from '../pages/MaterialDetail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/materials/:id" element={<MaterialDetail />} />
    </Routes>
  )
}

export default AppRoutes
