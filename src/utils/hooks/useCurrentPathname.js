import { useLocation } from "react-router";

export const useCurrentPathname = () => {
    const location = useLocation();
    return location.pathname;
  };
