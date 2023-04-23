import { RouteObject } from "react-router-dom";
import { publicRoute } from "./public/publicRoute";
import { privateRoutes } from "./private/privateRoutes";

export const MainRoutes = (): RouteObject[] => {
    const routes: RouteObject[] = [];
    // check if user is logged in

    return routes.concat(publicRoute, privateRoutes);
};
