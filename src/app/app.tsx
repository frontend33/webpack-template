import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import React, {Suspense} from "react";
import {LazyAbout} from "@/pages/about";
import {LazyShop} from "@/pages/shop";
import {Home} from "@/pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: '/about',
                element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
            },
        ]
    },
])
export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};