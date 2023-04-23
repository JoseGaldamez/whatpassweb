import { RouteObject } from "react-router-dom";
import { Login } from "../../pages/auth/login/Login";
import { Home } from "../../pages/home/Home";
import { ErrorPage } from "../errorRoute";

export const publicRoute: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "login",
        element: <Login />,
    },
];
