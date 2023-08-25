import React, { Fragment, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import JobSeeker from "./Components/JobSeeker";
import JobCreator from "./Components/JobCreator";
import UserContext from "./utils/userContext";
import CreateJob from "./Components/CreateJob";

const AppLayout = () => {

    const [user, setUser] = useState(null);
    console.log(user);

    return(
        <Fragment>
            <UserContext.Provider value={
                {
                    user:user, 
                    setUser:setUser
                }
            }>
                <Header/> 
                <Outlet/>
                <Footer/> 
            </UserContext.Provider>
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
                // element: <BrowseJobs/>
            },
            {
                path: '/whatwedo',
                // element: <WhatWeDo/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/job-seeker',
                element: <JobSeeker/>
            },
            {
                path: '/job-creator',
                element: <JobCreator/>
            },
            {
                path: '/create-job',
                element: <CreateJob/>
            },
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);