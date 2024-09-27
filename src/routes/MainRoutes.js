import { Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Browse from "../Pages/Browse"
import MoviePage  from "../Pages/MoviePage"

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
     
      // {
      //   path: "*",
      //   element: <Navigate to={`/`} />,
      // },
    ],
  },
];

export default MainRoutes;