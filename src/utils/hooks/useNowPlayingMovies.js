import { useEffect } from "react";
import { API_OPTIONS, API_NOW_PLAYING } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(API_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
