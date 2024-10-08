import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className=" fixed -z-10 w-full ">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" width="100%" />
      </div>
      <div className="relative w-full ">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
