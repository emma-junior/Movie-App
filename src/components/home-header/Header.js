import React from "react";
import hero from "../../images/batman.jpg";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img className="hero-img" src={hero} alt="pic" />
        <h3>
          CATCH ALL THE BEST AND LATEST MOVIES RIGHT HERE ON THE MOVIE BOX
        </h3>
      </div>
    </div>
  );
};

export default Header;
