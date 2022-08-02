import React from "react";
import Footer from "../../components/footer/Footer";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";
import Navbar from "../../components/navbar/Navbar";

const Nowplayingpage = () => {
  return (
    <div>
      <Navbar />
      <CategoriesBtn movieType="now_playing" />
      <Movies movieType="now_playing" />
      <Footer />
    </div>
  );
};

export default Nowplayingpage;
