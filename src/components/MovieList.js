import React from "react";
import MovieCard from "./MovieCard";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

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
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-0 text-white text-sm md:text-2xl px-2 md:px-10 my-4">
      {movies.length === 1 ? (
        <div className="bg-transparent">
          <div className="my-2">{title}</div>
          <MovieCard posterPath={movies[0].poster_path} hover={false} />
        </div>
      ) : (
        <>
          <div className=" my-2">{title}</div>
          <Slider {...settings}>
            {movies?.map((movie) => (
              <MovieCard
                hover="true"
                key={movie.id}
                posterPath={movie.poster_path}
              />
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default MovieList;
