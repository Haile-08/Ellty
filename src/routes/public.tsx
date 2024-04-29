import {
    createBrowserRouter,
    RouterProvider,
    useRouteError,
} from 'react-router-dom';

function ErrorPage() {
    const error: unknown = useRouteError();
    
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{(error as { statusText?: string })?.statusText || (error as Error)?.message}</i>
            </p>
        </div>
    );
}

const PublicRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <div>Hello world!</div>,
            errorElement: <ErrorPage />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default PublicRoutes;
