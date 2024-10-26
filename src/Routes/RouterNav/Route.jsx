import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/pages/HomePage/Home";
import About from "../../components/pages/AboutPage/About";
import Login from "../../components/pages/LoginSignIn/Login";
import Signin from "../../components/pages/LoginSignIn/Signin";

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
                path:'/login',
                element: <Login />,
            },
            {
                path:'/signin',
                element: <Signin />,
            },
        ]
    }
])

export default router