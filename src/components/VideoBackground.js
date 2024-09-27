import React from "react";
import {useSelector } from "react-redux";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
 
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className="m-0 p-0">
      <iframe
      className="w-[100%] aspect-video "
       
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?playlist="+ trailerVideo?.key+"&rel=0&autoplay=1&controls=0&showinfo=0&modestbranding=1&wmode=transparent&loop=1&mute=1"}
        frameBorder="0" allowFullScreen
      
      ></iframe>
    </div>
  );
};

export default VideoBackground;
