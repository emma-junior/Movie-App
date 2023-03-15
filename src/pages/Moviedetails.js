import React from "react";
import { useParams } from "react-router-dom";
import SingleMovie from "../components/single-movie/SingleMovie";

const Moviedetails = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <SingleMovie id={id} />
    </div>
  );
};

export default Moviedetails;
