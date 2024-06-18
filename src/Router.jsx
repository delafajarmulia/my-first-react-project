import { createBrowserRouter, Router } from "react-router-dom";
import Login from "./pages/Login";
import Category from "./pages/Category";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Login/>   ,
        children:[
            {
                path:'/login',
                element: <Login/>,
            }
        ]
    },
    {
        path:'/category',
        element: <Category />
    }
])

export default router