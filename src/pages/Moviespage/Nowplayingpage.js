import React from "react";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";

const Nowplayingpage = () => {
  return (
    <div>
      <CategoriesBtn movieType="now_playing" />
      <Movies movieType="now_playing" />
    </div>
  );
};

export default Nowplayingpage;
