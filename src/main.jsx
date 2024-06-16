import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Router.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Root from 'postcss/lib/root'
// import Router from './Router.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Router/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
