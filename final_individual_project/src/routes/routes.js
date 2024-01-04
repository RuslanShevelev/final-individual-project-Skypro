import React from 'react'
import { useRoutes } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import ProtectedRoute from './protected-route'
import { MainPage } from 'pages/main'
import { Profile } from 'pages/profile'
import { Article } from 'pages/article'
import { useAuth } from 'hooks/use-auth'
// import Favorites from '../../pages/favorites/favorites'
// import SignIn from '../../pages/sign/Signin'
import { Layout } from 'pages/layout'
// import { SignIn } from 'modal/signin'
// import { NotFound } from '../../pages/notfound/notfound'
// import { Categories } from '../../pages/category/category'

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
        { path: '/myArticle', element: <Article myArticle /> },
        // { path: '/login', element: <SignIn /> },
      ],
    },

    // { path: '/signup', element: <SignUp /> },
    {
      element: <ProtectedRoute isAllowed={isAuth} />,
      children: [
        { path: '/myProfile', element: <Profile auth={isAuth} /> },
        // { path: '/', element: <Main /> },
        // { path: '/favorites', element: <Favorites /> },
        // { path: '/category/:id', element: <Categories /> },
      ],
    },
    // { path: '*', element: <NotFound /> },
  ])
  return element
}
