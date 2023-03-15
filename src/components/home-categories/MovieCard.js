import React from "react";
import { Link } from "react-router-dom";
// import "./categories.css";
import "./moviecard.css";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="homemovies-wrapper">
        <Link to={`/movie-details/${movie.id}`}>
          <div className="img-wrap">
            <img
              className="category-img"
              id="zoom"
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="pic"
            />
          </div>
        </Link>

        <h4>{movie.title}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
