import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import "./single.css";
import Loading from "../Loading";
import useFetch from "../../hooks/useFetch";
import { useGlobalContext } from "../../hooks/Context";

import Genre from "./Genre";
import Description from "./Description";
import Details from "./Details";

const SingleMovie = ({ id }) => {
  const { pageNo } = useGlobalContext();
  const { data, isloading } = useFetch(id, pageNo);
  console.log("singlemovie", data);
  const [view, setView] = useState("description");

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <div className="single-movie_wrapper">
          <div className="single-movie_details">
            <p className="movie-title">{data?.title}</p>
            <div className="genre-container">
              {data.genres?.map((genre) => {
                return (
                  <div className="genre-wrapper" key={genre?.id}>
                    <Genre genre={genre} />
                  </div>
                );
              })}
            </div>
            <div className="heading">
              <p
                className={`${view === "description" && "topic"} header`}
                onClick={() => setView("description")}
              >
                Description
              </p>
              <p
                className={`${view === "review" && "topic"} header`}
                onClick={() => setView("review")}
              >
                Reviews
              </p>
              <p
                className={`${view === "details" && "topic"} header`}
                onClick={() => setView("details")}
              >
                Details
              </p>
            </div>
            {view === "description" && <Description data={data} />}
            {view === "review" && (
              <div className="review">
                <div className="review-alert">
                  <p className="review-icon">
                    <FiAlertCircle />
                  </p>
                  <p className="no-review">No Reviews Yet</p>
                </div>
              </div>
            )}
            {view === "details" && <Details data={data} />}
          </div>
          <div>
            <img
              className="single-movie_imgWrapper"
              src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt="imageone"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
