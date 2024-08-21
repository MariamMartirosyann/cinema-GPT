import React from "react";
import {useSelector } from "react-redux";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
 
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(movieId,"movieId")

  useMovieTrailer(movieId);
  return (
    <div className="m-0 p-0">
      <iframe
      className="w-[100%]  aspect-video"
       
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?playlist="+ trailerVideo?.key+"&autoplay=1&controls=1&loop=1&mute=1"}
        frameborder="0" allowfullscreen
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
