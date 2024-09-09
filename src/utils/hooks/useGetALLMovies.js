import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALLMovies } from "../redux/moviesSlice";

const useGetALLMovies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((store) => store?.movies);
  const gptMoviesAll = useSelector((store) => store.gpt.movieResults);
  const storeALLMovies = useSelector((store) => store.movies.allMovies);
  const gptMovies = gptMoviesAll?.flat();

  if (!storeALLMovies) {
    const allMovies = gptMovies
      ? [
          ...movies?.nowPlayingMovies,
          ...movies?.popularMovies,
          ...movies?.topRatedMovies,
          ...gptMovies,
        ]
      : [
          ...movies?.nowPlayingMovies,
          ...movies?.popularMovies,
          ...movies?.topRatedMovies,
        ];

    dispatch(getALLMovies(allMovies));
  }
};

export default useGetALLMovies;
