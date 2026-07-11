import { createBrowserRouter } from "react-router";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home";
import Register from "../../pages/Register";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/register',
        Component: Register
    },
])

export default Router;