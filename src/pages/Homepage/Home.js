import React from "react";
import MoviesRow from "../../components/home-categories/MoviesRow";
import Hometvshows from "../../components/home-categories/Hometvshows";
import Header from "../../components/home-header/Header";
import "./home.css";

const Home = () => {
  return (
    <div className="movies-homepage">
      <Header />
      <h3>MOVIES</h3>
      <div>
        <div className="category-component">
          <MoviesRow className="movie-row" movieType="popular" />
          <MoviesRow className="movie-row" movieType="top_rated" />
          <MoviesRow className="movie-row" movieType="now_playing" />
          <MoviesRow className="movie-row" movieType="upcoming" />
        </div>
        <Hometvshows />
      </div>
    </div>
  );
};

export default Home;
