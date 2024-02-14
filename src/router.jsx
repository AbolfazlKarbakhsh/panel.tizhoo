import { Link, createBrowserRouter, redirect } from "react-router-dom";

// Auth Routing Components 
import IdentityLayout from "@layouts/Identity/IdentityLayout";
import Login from "@features/auth/Login";
import { loginAction } from "@features/auth/Login";
import LoginMain from "@features/auth/LoginMain";


import MainLayout from "@layouts/main/MainLayout";
import Students from "@pages/Students";
import LessonsMain from "@pages/LessonsMain";
import AcademyMain from "@pages/Academys";
import BaseFeildMain from "@pages/BaseFeildMain";
import TestCourseMain from "@pages/TestCourseMain";
import ClassesMain from "@pages/ClassesMain";

const router = createBrowserRouter([

    {
        element: <MainLayout />,
        path: "/",
        children: [
            {
                element: <Students />,
                errorElement: <Students />,
                index: true,
            },
            {
                element: <LessonsMain />,
                errorElement: <LessonsMain />,
                path: '/lessons'
            },
            {
                element: <AcademyMain />,
                errorElement: <AcademyMain />,
                path: '/academys'
            },
            {
                element: <BaseFeildMain />,
                errorElement: <BaseFeildMain />,
                path: '/base-feilds'
            },
            {
                element: <TestCourseMain />,
                errorElement: <TestCourseMain />,
                path: '/test-courses'
            },
            {
                element: <ClassesMain />,
                errorElement: <ClassesMain />,
                path: '/classes'
            },
        ]
    },
    {
        element: <IdentityLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
                errorElement: <LoginMain />,
                action : loginAction ,
            },
        ]
    },
    {
        path: '*' ,
        element: <Link to={'/login'} className="btn btn-danger">  Page 404</Link>,
    }
]);

export default router