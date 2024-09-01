import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="relative w-full">
      <div className=" fixed -z-10 w-full">
        <img src={BG_URL} alt="logo" width="100%"/>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
