import React, { useState } from "react";
import "./movies.css";
import Loading from "../Loading";
import useFetch from "../../hooks/useFetch";
import MoviesCard from "./MoviesCard";
import { useGlobalContext } from "../../hooks/Context";
import PaginationBtns from "./Pagination";

const Movies = ({ movieType }) => {
  // const [pageNo, setPageNo] = useState(1);
  const { pageNo } = useGlobalContext();
  const { data, isloading } = useFetch(movieType, pageNo);

  console.log(pageNo);
  return (
    <div className="movies-container">
      {isloading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          {(data.results ?? []).map((movie) => {
            return (
              <div>
                <MoviesCard movie={movie} />
              </div>
            );
          })}
        </div>
      )}
      <PaginationBtns movieType={movieType} />
    </div>
  );
};

export default Movies;
