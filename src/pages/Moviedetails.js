import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import SingleMovie from "../components/single-movie/SingleMovie";

const Moviedetails = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <Navbar />
      <SingleMovie id={id} />
      <Footer />
    </div>
  );
};

export default Moviedetails;
