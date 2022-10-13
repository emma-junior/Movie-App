import React from "react";
import { Link } from "react-router-dom";
import { titleCase } from "../../helper";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import "./categories.css";
import MovieCard from "./MovieCard";

const MoviesRow = ({ movieType }) => {
  const { data, isloading } = useFetch(movieType, 1);
  return (
    <div className="">
      <div className="category-viewall">
        <h2>{titleCase(movieType.replaceAll("_", " "))}</h2>
        <p>
          <Link className="link" to={`/${movieType}`}>
            View All
          </Link>
        </p>
      </div>
      <div>
        {isloading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="home-movies">
            {data.results?.slice(0, 4).map((movie) => {
              return (
                <div>
                  <MovieCard movie={movie} movieType={movieType} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesRow;
