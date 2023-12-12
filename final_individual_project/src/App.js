import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'routes/routes'
import './css/app.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
