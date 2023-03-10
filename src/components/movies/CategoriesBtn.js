import React from "react";
import { Link } from "react-router-dom";
import "./categoriesbtn.css";

const CategoriesBtn = ({ movieType }) => {
  return (
    <div className="categories-search">
      <div className="categories-btn">
        <Link to="/popular">
          <button
            className={`popular ${
              movieType === "popular" && "popular-active"
            } `}
          >
            Popular
          </button>
        </Link>
        <Link to="/top_rated">
          <button
            className={`top-rated ${
              movieType === "top_rated" && "toprated-active"
            }`}
          >
            Top Rated
          </button>
        </Link>
        <Link to="/now_playing">
          <button
            className={`now-playing ${
              movieType === "now_playing" && "nowplaying-active"
            }`}
          >
            Now playing
          </button>
        </Link>
        <Link to="/upcoming">
          <button
            className={`upcoming ${
              movieType === "upcoming" && "upcoming-active"
            }`}
          >
            Upcoming
          </button>
        </Link>
      </div>
      <div className="search-div">
        <Link className="search-div" to="/search">
          <button>Find Movie</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesBtn;
