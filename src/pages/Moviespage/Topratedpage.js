import React from "react";
import Footer from "../../components/footer/Footer";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";
import Navbar from "../../components/navbar/Navbar";

const Topratedpage = () => {
  return (
    <div>
      <Navbar />
      <CategoriesBtn movieType="top_rated" />
      <Movies movieType="top_rated" />
      <Footer />
    </div>
  );
};

export default Topratedpage;
