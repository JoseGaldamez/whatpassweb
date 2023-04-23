import { RouteObject } from "react-router-dom";
// Pages
import { Dashboard } from "../../pages/dashboard/Dashboard";
import { DashboardHome } from "../../components/DashboardHome/DashboardHome";
import { UserSetting } from "../../components/UserSetting/UserSetting";

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
                path: "setting",
                element: <UserSetting />,
            },
        ],
    },
];
