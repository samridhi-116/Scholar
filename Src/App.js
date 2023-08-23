import React, { Fragment} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home";

const AppLayout = () => {
    return(
        <Fragment>
            <Header/> 
            <Outlet/>
            <Footer/> 
        </Fragment>
    )
}

const AppRouter = createBrowserRouter([
    {  
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/browsejobs',
                element: <BrowseJobs/>
            },
            {
                path: '/whatwedo',
                element: <WhatWeDo/>
            },
            
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);