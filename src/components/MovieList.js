import React,{useEffect} from "react";
import MovieCard from "./MovieCard";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';


const MovieList = ({ title, movies }) => {

  const navigate=useNavigate()


 
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
 
  if (!movies) return null;
  return (
    <div className="mx-0 text-white text-sm md:text-2xl px-2 md:px-10 my-4" >
      {movies.length === 1 ? (
        <div className="bg-transparent">
          <div className="my-2">{title}</div>
          <Link   className=" contain-style-none" to={`/browse/movie/${movies[0].idt}`}  >
          <MovieCard posterPath={movies[0].poster_path} hover={false} />
          </Link>
        </div>
      ) : (
        <>
          <div className=" my-2" >{title}</div>
          <Slider {...settings}>
            {movies?.map((movie) => (
             <Link    className=" contain-style-none" to={`/browse/movie/${movie.id}`} key={movie.id} >
              <MovieCard
                hover="true"
                
                posterPath={movie.poster_path}
              
              />
              </Link>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default MovieList;
