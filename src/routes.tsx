import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'
import GameDetailPage from './Pages/GameDetailPage'
import HomePage from './Pages/HomePage'
import Layout from './Pages/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
    ],
  },
])

export default router
