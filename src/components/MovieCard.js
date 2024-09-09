import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, hover }) => {
  if(!posterPath)return 
  return (
    <div className={hover ? " bg-transparent m-2 border-0  box-border hover:box-border hover:border-dotted hover:border-red-600 hover:border-[5px]  md:hover:border-[10px] " : "bg-transparent"}>
      <img
        alt="Movie Image"
      
        className="w-[100px] md:w-[200px] h-[120px] md:h-[240px]"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
