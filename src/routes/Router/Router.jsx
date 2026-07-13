import { createBrowserRouter } from "react-router";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Error from "../../pages/Error";
import Details from "../../pages/Details";
import Loading from "../../pages/Loading";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/pet&supplies',
            },
            {
                path: '/addListing',
            },
            {
                path: '/myListing',
            },
            {
                path: '/myOrders',
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: async ({ params }) => fetch(`http://localhost:5000/products/details/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/error',
        Component: Error
    },

])

export default Router;