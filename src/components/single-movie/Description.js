import React, { useState } from "react";
import Likeicon from "./Likeicon";
import { BiTime } from "react-icons/bi";

const Description = ({ data }) => {
  const [colorChange, setColorChange] = useState("grey");

  const likeHandler = () => {
    if (colorChange === "grey") {
      setColorChange("red");
    } else if (colorChange === "red") {
      setColorChange("grey");
    }
  };
  return (
    <div className="desc">
      <p className="overview">{data?.overview}</p>
      <div className="like-runtime">
        <div className="like-dive">
          <div className="like-bg">
            <p onClick={likeHandler}>
              <Likeicon colorChange={colorChange} />
            </p>
          </div>
        </div>
        <div className="runtime">
          <p className="runtime-icon">
            <BiTime />
          </p>
          <p>{data?.runtime} min</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
