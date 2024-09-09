import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import PublicRoutes from "./PublichRoutes";

const Routes = () => {

  const routes =[...MainRoutes, ...PublicRoutes]
   

  return useRoutes(routes);
};

export default Routes;