import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Root from 'postcss/lib/root'
// import Router from './Router.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Router/>
//   }
// ])

// Import the generated route tree
// import { routeTree } from './routeTree.gen'

// // Create a new router instance
// const router = createRouter({ routeTree })

// // Register the router instance for type safety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // <QueryClientProvider client={QueryClient}> */}
      <RouterProvider router={router}/>
    {/* </QueryClientProvider> */}
    // {/* <App /> */}
  </React.StrictMode>,
)
