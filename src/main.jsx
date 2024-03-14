import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage.jsx'
import HomePage from './Components/Home/HomePage.jsx'
import { Personajes } from './Components/Personajes.jsx'
import Ubicaciones from './Components/Ubicaciones.jsx'
import Episodios from './Components/Episodios.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/Personajes',
    element: <Personajes />,
  },
  {
    path: '/Ubicaciones',
    element: <Ubicaciones />,
  },
  {
    path: '/Episodios',
    element: <Episodios />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
