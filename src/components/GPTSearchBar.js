import React, { useEffect, useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/redux/GPTSlice";

const GPTSearchBar = () => {
  const [err, setErr] = useState("");
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTSeatchClick = async () => {
   
    if (!searchText) return;
    const GPTQuery =
      "Act like movie recomendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me name of 5 movies, coma seperated like the example result given ahead.Example Result: Men in bleack,Red Notice, Avatar,Adam  project";
    const GPTResults = await client.chat.completions.create({
      messages: [{ role: "user", content: GPTQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!GPTResults?.choices[0]) {
      setErr("Ups there is no shuch movie");
    }
    //console.log(GPTResults?.choices[0]?.message?.content, "GPTResults");

    const GPTMoviesList = GPTResults?.choices[0]?.message?.content.split(",");
    const data = GPTMoviesList.map((m) => searchMovieTMDB(m));

    const TMDBResults = await Promise.all(data);
    //console.log(TMDBResults, "TMDBResults");
    dispatch(
      addGptMovieResult({
        movieNames: GPTMoviesList,
        movieResults: TMDBResults,
      })
    );
  };

  
  return (
    <div className="flex justify-center align-middle pt-[60%] md:pt-[12%] ">
      <form
        className=" bg-black grid grid-cols-12 w-[80vw] md:w-[60vw]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4  m-4 col-span-12 md:col-span-9 "
          placeholder={lang[langKey].GPTSearchPlaceholder}
        ></input>{" "}
        <button
          className="py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-12 md:col-span-3"
          onClick={handleGPTSeatchClick}
        >
          {lang[langKey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
