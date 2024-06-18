import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false, // biar gak call api terus tiap kali ganti tab
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <RouterProvider router={router}/>
    </QueryClientProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
