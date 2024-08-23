import { useEffect } from "react";
import { API_OPTIONS, API_TOP_RATED } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {

  const dispatch = useDispatch();

  const getTopRatedMovie= async () => {
    const data = await fetch(API_TOP_RATED, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
    console.log(json?.results, "json");
 
  };

  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;
