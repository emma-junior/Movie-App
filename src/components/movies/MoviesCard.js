import React from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

const MoviesCard = ({ movie }) => {
  return (
    <Link
      to={`/movie-details/${movie.id}`}
      className="movie-wrapper"
      key={movie.id}
    >
      <div>
        <img
          className="movie-image"
          src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="pic"
        />
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p className="movie-overview">{movie.overview.substr(0, 150)}...</p>
        <div className="like-div">
          <p className="like-btn">Like</p>
          <p className="like-icon">
            <AiFillLike />
          </p>
        </div>
      </div>
      <div className="date-wrapper">
        <p className="">{movie.release_date}</p>
      </div>
    </Link>
  );
};

export default MoviesCard;
