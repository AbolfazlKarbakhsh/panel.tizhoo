import { Link, createBrowserRouter, redirect } from "react-router-dom";

// Auth Routing Components 
import IdentityLayout from "@layouts/Identity/IdentityLayout";
import Login from "@features/auth/Login";
import { loginAction } from "@features/auth/Login";
import LoginMain from "@features/auth/LoginMain";


import MainLayout from "@layouts/main/MainLayout";
import StudentsMain from "@pages/pishro/StudentsMain";
import LessonsMain from "@pages/pishro/LessonsMain";
import AcademyMain from "@pages/pishro/Academys";
import BaseFeildMain from "@pages/pishro/BaseFeildMain";
import TestCourseMain from "@pages/pishro/TestCourseMain";
import ClassesMain from "@pages/pishro/ClassesMain";
import StudentScoreMain from "@pages/pishro/student-score-main";

const router = createBrowserRouter([

    {
        element: <MainLayout />,
        path: "/",
        children: [
            {
                element: <StudentsMain />,
                errorElement: <StudentsMain />,
                index: true,
            },
            {
                element: <StudentScoreMain />,
                errorElement: <StudentScoreMain />,
                path: '/student-score/:id/:baf'
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