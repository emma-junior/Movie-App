import React from "react";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";

const Upcomingpage = () => {
  return (
    <div>
      <CategoriesBtn movieType="upcoming" />
      <Movies movieType="upcoming" />
    </div>
  );
};

export default Upcomingpage;
