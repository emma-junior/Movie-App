import React from "react";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";

const Topratedpage = () => {
  return (
    <div>
      <CategoriesBtn movieType="top_rated" />
      <Movies movieType="top_rated" />
    </div>
  );
};

export default Topratedpage;
