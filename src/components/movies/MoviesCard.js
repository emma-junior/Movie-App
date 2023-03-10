import React from "react";
import { Link } from "react-router-dom";
import "./moviescard.css";

const MoviesCard = ({ movie }) => {
  return (
    <Link
      to={`/movie-details/${movie.id}`}
      className="movie-wrapper"
      key={movie.id}
    >
      <div className="">
        <img
          className="movie-image"
          src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="pic"
        />
      </div>
      <div className="info_date">
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p className="movie-overview">{movie.overview.substr(0, 150)}...</p>
        </div>
        <div className="date-wrapper">
          <p className="">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MoviesCard;
