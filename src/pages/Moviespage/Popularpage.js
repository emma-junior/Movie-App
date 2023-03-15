import React from "react";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";

const Popularpage = () => {
  return (
    <div>
      <CategoriesBtn movieType="popular" />
      <Movies movieType="popular" />
    </div>
  );
};

export default Popularpage;
