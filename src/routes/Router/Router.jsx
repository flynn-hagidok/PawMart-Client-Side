import { createBrowserRouter } from "react-router";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Error from "../../pages/Error";
import Details from "../../pages/Details";
import Loading from "../../pages/Loading";
import PetAndSupplies from "../../pages/PetAndSupplies";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../../pages/Login";
import MyOrders from "../../pages/MyOrders";
import AddListing from "../../pages/AddListing";
import MyListing from "../../pages/MyListing";


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
                path: '/pet-supplies',
                Component: PetAndSupplies,
                loader: () => fetch("http://localhost:5000/products"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/addListing',
                element: <PrivateRoute><AddListing></AddListing></PrivateRoute>
            },
            {
                path: '/myListing',
                element: <PrivateRoute><MyListing></MyListing></PrivateRoute>
            },
            {
                path: '/myOrders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
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
        path: '/login',
        Component: Login
    },
    {
        path: '/error',
        Component: Error
    },

])

export default Router;