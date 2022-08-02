import React from "react";
import { Link } from "react-router-dom";
// import { useGlobalContext } from "../../hooks/Context";
import "./navbar.css";

const Navbar = () => {
  // const { pageNo, setPageNo } = useGlobalContext();
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Link className="home-link" to="/">
          <h2>The MovieBox</h2>
        </Link>
        <div className="navbar-btns">
          <Link className="nav-btn" to="/popular">
            <button>Movies</button>
          </Link>
          <Link className="nav-btn" to="/tvshows">
            <button>Tv Shows</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
