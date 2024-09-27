import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import useCurrentMovie from "../utils/hooks/useCurrentMovie";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MoviePage = () => {
  const [moviesData, setMoviesData] = useState();
  const [localStorageData, setLocalStorageData] = useState();
  console.log(localStorageData, "localStorageData");
  const movieId = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currnetId = Number(movieId.id);

  const movies = useSelector((store) => store?.movies);
  const gptMoviesAll = useSelector((store) => store.gpt?.movieResults);

  const gptMovies = gptMoviesAll?.flat();
  const nowPlayingMovies = movies?.nowPlayingMovies;
  console.log(nowPlayingMovies, "nowPlayingMovies");
  const popularMovies = movies?.popularMovies;
  const topRatedMovies = movies?.topRatedMovies;

  let allMovies = [];
  const getAllMovies = () => {
    if (nowPlayingMovies && popularMovies && topRatedMovies) {
      if (!moviesData) {
        allMovies = gptMovies
          ? [
              ...nowPlayingMovies,
              ...popularMovies,
              ...topRatedMovies,
              ...gptMovies,
            ]
          : [...nowPlayingMovies, ...popularMovies, ...topRatedMovies];
      }

      console.log(allMovies, "nowPlayingMovies from getAllMovies");
      setMoviesData(allMovies);
    }
  };

  const currentVideo = useSelector((store) => store.movies?.currentVideo);
  console.log(currentVideo, currnetId, "currentVideo id");

  const getMoviesFromLocalStorage = () => {
    const data = JSON?.parse(
      window.localStorage.getItem("allMoviesLocalStorage")
    );
    setLocalStorageData(data);
    setMoviesData(data);
  };

  const putMoviesTuLocalStorage = () => {
    getAllMovies();

    console.log(allMovies, "allMovies from put movies to L s");
    window.localStorage.setItem(
      "allMoviesLocalStorage",
      JSON.stringify(allMovies)
    );
  };

  console.log(moviesData, "moviesData");

  const movie = moviesData?.find((m) => m.id === currnetId);

  useCurrentMovie(currnetId);

  useEffect(() => {
    !localStorageData ? putMoviesTuLocalStorage() : getMoviesFromLocalStorage();
  }, []);

  return (
    <>
      <div className="bg-black text-white flex flex-col w-full">
        <div className="flex  flex-col lg:flex-row w-full m-[5%]">
          <div className=" w-[100%] lg:w-1/3 mx-auto lg:mr-[5%] content-center">
            <img
              className=" w-[90%] lg:w-full "
              src={IMG_CDN_URL + movie?.poster_path}
              alt="Movie Poster"
            />
          </div>
          <div className="w-[100%] px-auto flex flex-col lg:w-2/3">
            <div className="w-full  text-2xl lg:text-5xl my-10 ">
              <h1>{movie?.title}</h1>
            </div>
            <div className="flex flex-row text-xl lg:text-3xl  mb-[8%]">
              <div className=" w-1/2">
                <div className="my-5">Year : </div>
                <div className="my-5">Popularity :</div>
                <div className="my-5">Original language :</div>
                <div className="my-5">Vote average :</div>
              </div>
              <div className="w-1/2">
                <div className="my-5">{movie?.release_date}</div>
                <div className="my-5">{movie?.popularity}</div>
                <div className="my-5">{movie?.original_language}</div>
                <div className="my-5">{movie?.vote_average}</div>
              </div>
            </div>
            <div className=" w-[85%] text-xl lg:text-3xl">
              {movie?.overview}
            </div>
          </div>
        </div>
        <div className="p-10 bg-black">
          <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/" + currentVideo?.key}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
