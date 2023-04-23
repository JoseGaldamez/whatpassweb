import { RouteObject } from "react-router-dom";
// Pages
import { Dashboard } from "../../pages/dashboard/Dashboard";
import { DashboardHome } from "../../components/DashboardHome/DashboardHome";
import { UserSetting } from "../../components/UserSetting/UserSetting";
import { Passwords } from "../../components/Passwords/Passwords";
import { Shared } from "../../components/Shared/Shared";

export const privateRoutes: RouteObject[] = [
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "home",
                element: <DashboardHome />,
            },
            {
                path: "passwords",
                element: <Passwords />,
            },
            {
                path: "shared",
                element: <Shared />,
            },
            {
                path: "setting",
                element: <UserSetting />,
            },
            {
                path: "*",
                element: <div>404</div>,
            }
        ],
    },
];
