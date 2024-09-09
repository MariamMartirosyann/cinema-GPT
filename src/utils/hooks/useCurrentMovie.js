import { useEffect} from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentVideo } from "../redux/moviesSlice";

const useCurrentMovie = (movieId) => {
  const currentVideo = useSelector((store) => store.movies?.currentVideo);

  const dispatch = useDispatch();
  const getCurrentMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data?.json();
   
    const filterData = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const currentVideo = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(addCurrentVideo(currentVideo));
  };

  useEffect(() => {
    !currentVideo && getCurrentMovieVideo();
  }, []);
};

export default useCurrentMovie;
