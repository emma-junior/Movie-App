import React, { useState } from "react";
import useSearchFetch from "../../hooks/useSearchFetch";
import searchPageImg from "../../images/searchpage.webp";
import MovieCard from "../home-categories/MovieCard";
import Loading from "../Loading";
import { FaSearch } from "react-icons/fa";

import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchedMovie, setSearchedMovie] = useState("");
  const { data, isloading } = useSearchFetch(searchedMovie);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedMovie(query);
    setQuery("");
  };
  console.log(data?.results.length);
  return (
    <div className="search-page">
      <div className="search-img">
        <img src={searchPageImg} alt="" />
        <div className="search-input-div">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search For Movie"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div>
        <div className="search-container">
          {isloading && (
            <div>
              <Loading />
            </div>
          )}
          {data?.results && (
            <div className="search-wrapper">
              {(data.results ?? []).map((movie) => {
                return (
                  <div className="search-card">
                    <MovieCard movie={movie} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {data?.results.length < 1 && (
          <div className="search-movie">
            <h2>search movie</h2>
            <p>
              <FaSearch />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
