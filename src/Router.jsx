import { createBrowserRouter, Router } from "react-router-dom";
import Login from "./pages/Login";

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
    }
])

export default router