import { useEffect } from "react";
import { API_OPTIONS, API_NOW_PLAYING } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(API_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
    console.log(json?.results, "json");
 
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
