import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/pages/HomePage/Home";
import Login from "../../components/pages/LoginSignIn/Login";
import Signin from "../../components/pages/LoginSignIn/Signin";
import Dashboard from "../../components/pages/dashboard/Dashboard";
import PrivateRoute from "../PrivetRoute/PrivateRoute";
import { Shop } from "../../components/pages/Shop/Shop";
import { About } from "../../components/pages/About/About";
import { ProductCat } from "../../components/pages/Shop/ProductCat";
import { Contact } from "../../components/pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/shop',
                element: <Shop />,
                loader: async () => await fetch("https://backend-for2ndmarket.vercel.app/products"),
            },
            {
                path: '/shop/:id',
                element: <ProductCat />,
                loader: async ({params}) => await fetch(`https://backend-for2ndmarket.vercel.app/shop/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signin',
                element: <Signin />,
            },
            {
                path: '/dashboard/:id',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                loader: async ({params}) => await fetch(`https://backend-for2ndmarket.vercel.app/products/${params.id}`)
            },
        ]
    }
])

export default router