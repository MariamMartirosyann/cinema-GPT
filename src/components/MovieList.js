import React from "react";
import MovieCard from "./MovieCard";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows:false
  };

  console.log(movies, "movies");
  return (
    <div className="mx-0 text-white text-2xl px-10 my-4">
      <div className="my-2">{title}</div>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
