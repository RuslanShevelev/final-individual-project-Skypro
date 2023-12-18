import React from 'react'
import { useRoutes } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import ProtectedRoute from './protected-route'
import { MainPage } from 'pages/main'
import { Profile } from 'pages/profile'
import { Article } from 'pages/article'
// import Favorites from '../../pages/favorites/favorites'
// import SignIn from '../../pages/sign/Signin'
import { Layout } from 'pages/layout'
// import { SignIn } from 'modal/signin'
// import { NotFound } from '../../pages/notfound/notfound'
// import { Categories } from '../../pages/category/category'

export const AppRoutes = () => {
  //   const isAuth = useSelector((state) => state.auth.isAuth)

  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/myProfile', element: <Profile myProfile /> },
        { path: '/profile', element: <Profile /> },
        { path: '/article', element: <Article /> },
        { path: '/myArticle', element: <Article myArticle /> },
        // { path: '/login', element: <SignIn /> },
      ],
    },

    // { path: '/signup', element: <SignUp /> },
    {
      element: <ProtectedRoute isAllowed={false} />,
      children: [
        // { path: '/', element: <Main /> },
        // { path: '/favorites', element: <Favorites /> },
        // { path: '/category/:id', element: <Categories /> },
      ],
    },
    // { path: '*', element: <NotFound /> },
  ])
  return element
}
