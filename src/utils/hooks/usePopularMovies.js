import { useEffect } from "react";
import { API_OPTIONS, API_POPULAR } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {

  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(API_POPULAR, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
    console.log(json?.results, "json");
 
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
