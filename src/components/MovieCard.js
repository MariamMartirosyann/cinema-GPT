import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className=" m-2 hover:m-10 bg-slate-500">
      <img alt="Movie Image" width="200px" height="150px" src={IMG_CDN_URL+posterPath} />
    </div>
  );
};

export default MovieCard;
