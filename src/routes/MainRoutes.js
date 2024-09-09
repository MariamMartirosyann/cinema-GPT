import { Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Browse from "./../components/Browse";
import MoviePage from "../components/MoviePage";

const MainRoutes = [
  {
    path: "/browse",
    element: <MainLayout />,
    children: [ 
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/browse/movie/:id",
        element: <MoviePage/>,
      },
     
      {
        path: "*",
        element: <Navigate to={`/`} />,
      },
    ],
  },
];

export default MainRoutes;