import Login from "../components/Login";
import MinimalLayout from "../Layouts/MinimalLayout";
import NotFoundPage from "../Pages/NotFoundPage";

const PublicRoutes = [
  {
    path: "/",
    element: <MinimalLayout/>,
    children: [
      { path: "/", element: <Login /> },
      { path: "404", element: <NotFoundPage /> },
    ],
  },
];

export default PublicRoutes;
