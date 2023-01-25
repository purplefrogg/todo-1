import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './layout/layout'
import { ProfilePage } from './pages/profilePage'
import { TodoPage } from './pages/todoPage/todoPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <TodoPage /> },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/password',
        element: <div>password</div>,
      },
      {
        path: '*',
        element: <h2>404</h2>,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
