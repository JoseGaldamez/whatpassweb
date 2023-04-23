import React from "react";
import ReactDOM from "react-dom/client";
import { GeneralRoute } from "./router/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={GeneralRoute} />
    </React.StrictMode>
);
