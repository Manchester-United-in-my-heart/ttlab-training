import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root"
import ErrorPage from './routes/error-page';
import Contact from './routes/contact';
import Login from './routes/login';
import Test from './routes/test';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contacts/:id',
        element: <Contact />,
      }
    ]
  },
   {
    path: '/contacts/:id',
    element: <Contact />,
   }, 
   {
    path: '/login',
    element: <Login />,
   },
  {
    path: '/test',
    element: <Test/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)