import { useEffect } from "react";
import { API_OPTIONS, API_POPULAR } from "../constants";
import { useDispatch,useSelector} from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {

  const dispatch = useDispatch();
  const nowPopularMovies=useSelector(store=>store.movies.popularMovies)

  const getPopularMovies = async () => {
    const data = await fetch(API_POPULAR, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
 
  };

  useEffect(() => {
    !nowPopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
