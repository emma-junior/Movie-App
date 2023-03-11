import React from "react";
import "./genre.css";

const Genre = ({ genre }) => {
  return (
    <div>
      <p
        className={`${genre?.name === "Fantasy" && "fantasy"} ${
          genre?.name === "Action" && "action"
        } ${genre?.name === "Adventure" && "adventure"} ${
          genre?.name === "Comedy" && "comedy"
        } ${genre?.name === "Romance" && "romance"} ${
          genre?.name === "Drama" && "drama"
        } ${genre?.name === "Family" && "family"} ${
          genre?.name === "Science Fiction" && "science-fiction"
        } ${genre?.name === "Thriller" && "thriller"} ${
          genre?.name === "Animation" && "animation"
        } ${genre?.name === "Horror" && "horror"} ${
          genre?.name === "Crime" && "crime"
        } ${genre?.name === "History" && "history"} ${
          genre?.name === "War" && "war"
        }`}
      >
        {genre?.name}
      </p>
    </div>
  );
};

export default Genre;
