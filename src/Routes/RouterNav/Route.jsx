import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/pages/HomePage/Home";
import Login from "../../components/pages/LoginSignIn/Login";
import Signin from "../../components/pages/LoginSignIn/Signin";
import Dashboard from "../../components/pages/dashboard/Dashboard";
import PrivateRoute from "../PrivetRoute/PrivateRoute";
import { Shop } from "../../components/pages/Shop/Shop";
import { About } from "../../components/pages/About/About";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />,
            },
            {
                path:'/about',
                element: <About />,
            },
            {
                path:'/shop',
                element: <Shop />,
                loader: async ()=> await fetch("http://localhost:3000/products"),
                children:[
                    {}
                ]
            },
            {
                path:'/login',
                element: <Login />,
            },
            {
                path:'/signin',
                element: <Signin />,
            },
            {
                path:'/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
        ]
    }
])

export default router