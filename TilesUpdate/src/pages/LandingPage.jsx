// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">
        🌋 Eco Tiles Platform
      </h1>
      <p className="text-lg mb-6">
        Build climate-friendly tiles using local materials like volcanic cones.
        <br />
        Reduce costs, pollution, and import dependency.
      </p>
      <Link
        to="/dashboard"
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Get Started
      </Link>
    </div>
  )
}

export default LandingPage
