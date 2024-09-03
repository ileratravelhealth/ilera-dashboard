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
import Notification from "../Pages/Dashboard/Notification";
import FAQ from "../Pages/Dashboard/FAQ";
import PrivacyPolicy from "../Pages/Dashboard/PrivacyPolicy";
import TermsCondition from "../Pages/Dashboard/TermsCondition";
import AdminRoutes from "../PrivetRoutes/AdminRoutes";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <AdminRoutes><Dashboard /></AdminRoutes>,
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
            {
                path: '/notification',
                element: <Notification />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />
            },
            {
                path: '/terms-&-condition',
                element: <TermsCondition />
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