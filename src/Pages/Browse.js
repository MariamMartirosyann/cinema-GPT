import React, { useEffect } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import GPTSearch from "../components/GPT/GPTSearch";
import { useSelector } from "react-redux";
import { nullCurrentVideo } from "../utils/redux/moviesSlice";
import { useDispatch } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useEffect(() => {
    dispatch(nullCurrentVideo());
  }, []);

  return (
    <div className=" m-0 p-0 flex flex-col">
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
