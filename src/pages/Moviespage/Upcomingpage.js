import React from "react";
import Footer from "../../components/footer/Footer";
import CategoriesBtn from "../../components/movies/CategoriesBtn";
import Movies from "../../components/movies/Movies";
import Navbar from "../../components/navbar/Navbar";

const Upcomingpage = () => {
  return (
    <div>
      <Navbar />
      <CategoriesBtn movieType="upcoming" />
      <Movies movieType="upcoming" />
      <Footer />
    </div>
  );
};

export default Upcomingpage;
