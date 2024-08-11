import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const SecondaryContainer = ({ movieId }) => {
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/533535/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json, "json");
    const filterData= json.results.filter(video=>video.type==="Trailer")
    //console.log(filterData)
    const trailer=filterData.length?filterData[0]:json.results[0]
    console.log(trailer)
    
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return <div>SecondaryContainer</div>;
};

export default SecondaryContainer;
