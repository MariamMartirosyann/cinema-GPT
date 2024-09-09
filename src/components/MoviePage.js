import React, { useState, useEffect ,memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import useCurrentMovie from "../utils/hooks/useCurrentMovie";


import useGetALLMovies from "../utils/hooks/useGetALLMovies";

const MoviePage = () => {
  const movieId = useParams();
  const currnetId = Number(movieId.id);

  useGetALLMovies();

  const storeALLMovies = useSelector((store) => store.movies.allMovies);
  const currentVideo = useSelector((store) => store.movies?.currentVideo);

  const movie = storeALLMovies?.find((m) => m.id === currnetId);
  
  useCurrentMovie(currnetId);

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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default memo(MoviePage);
