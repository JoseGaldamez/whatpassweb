import { useRouteError } from "react-router-dom";
import { errorPageType } from "../types/errorPage";

export const ErrorPage = () => {
    const error: errorPageType = useRouteError() as errorPageType;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};
