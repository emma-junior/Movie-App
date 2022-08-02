import React from "react";
import Footer from "../../components/footer/Footer";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";
import Navbar from "../../components/navbar/Navbar";

const Popularpage = () => {
  return (
    <div>
      <Navbar />
      <CategoriesBtn movieType="popular" />
      <Movies movieType="popular" />
      <Footer />
    </div>
  );
};

export default Popularpage;
