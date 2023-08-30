import React, { Fragment} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Register/Login";
import Signup from "./Components/Register/Signup";
import JobSeeker from "./Components/Seeker/JobSeeker";
import JobCreator from "./Components/Creator/JobCreator";
// import updateJobContext from "./utils/updateJobContext";
import CreateJob from "./Components/Creator/CreateJob";
import UpdateJob from "./Components/Creator/UpdateJob";
import AllJobs from "./Components/Seeker/AllJobs";
import AppliedJobs from "./Components/Seeker/AppliedJobs";
import JobCategory from "./Components/Seeker/JobCategory";
import JobByCategory from "./Components/Seeker/JobByCategory";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
    // const [user, setUser] = useState(null);
    // const [updateJob, setUpdateJob] = useState(null);
    return(
        <Fragment>
            <Provider store={store}>
                    <Header/> 
                    <Outlet/>
                    <Footer/>
            </Provider>
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
                element: <JobSeeker/>,
                children:[
                    {
                        path: 'all-jobs',
                        element: <AllJobs/>
                    },
                    {
                        path: 'applied-jobs',
                        element: <AppliedJobs/>
                    },
                    {
                        path: 'job-category',
                        element: <JobCategory/>,
                        children: [
                            {
                                path: 'jobsbycategory/:id',
                                element: <JobByCategory/>
                            }
                        ]
                    },
                ]
            },
            {
                path: '/job-creator',
                element: <JobCreator/>
            },
            {
                path: '/create-job',
                element: <CreateJob/>
            },
            {
                path: '/update-job',
                element: <UpdateJob/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);