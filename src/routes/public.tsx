import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

const PublicRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <div>Hello world!</div>,
            errorElement: <div>error</div>,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default PublicRoutes;
