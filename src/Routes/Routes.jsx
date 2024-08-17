import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Login from "../Pages/Auth/Login";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Otp from "../Pages/Auth/Otp";
import ResetPassword from "../Pages/Auth/ResetPassword";
import Appointments from "../Pages/Dashboard/Appointments";
import Transactions from "../Pages/Dashboard/Transactions";
import Patients from "../Pages/Dashboard/Patients";
import Doctors from "../Pages/Dashboard/Doctors";
import Management from "../Pages/Dashboard/Management";
import Profile from "../Pages/Dashboard/Profile";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/',
                element: <DashboardHome />
            },
            {
                path: '/appointment',
                element: <Appointments />
            },
            {
                path: '/transactions',
                element: <Transactions />
            },
            {
                path: '/patients',
                element: <Patients />
            },
            {
                path: '/doctors',
                element: <Doctors />
            },
            {
                path: '/management',
                element: <Management />
            },
            {
                path: '/profile',
                element: <Profile />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
    {
        path: '/otp',
        element: <Otp />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />
    },
])