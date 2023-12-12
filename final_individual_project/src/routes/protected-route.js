import React from 'react'
import { Navigate } from 'react-router-dom'
import { Layout } from 'pages/layout'

function ProtectedRoute({ redirectPath = '/login', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return <Layout />
}

export default ProtectedRoute
