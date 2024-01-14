import React from 'react'
import { useRoutes } from 'react-router-dom'
import ProtectedRoute from './protected-route'
import { MainPage } from 'pages/main'
import { Profile } from 'pages/profile'
import { Article } from 'pages/article'
import { useAuth } from 'hooks/use-auth'
import { Layout } from 'pages/layout'

export const AppRoutes = () => {
  const { isAuth } = useAuth()
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/profile/:id', element: <Profile /> },
        { path: '/article/:id', element: <Article /> },
      ],
    },
    {
      element: <ProtectedRoute isAllowed={isAuth} />,
      children: [
        { path: '/myProfile', element: <Profile myProfile={isAuth} /> },
        // { path: '/', element: <Main /> },
        // { path: '/favorites', element: <Favorites /> },
        // { path: '/category/:id', element: <Categories /> },
      ],
    },
    // { path: '*', element: <NotFound /> },
  ])
  return element
}
