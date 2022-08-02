import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Join 31,000+ other and never miss out on new movies and tv shows</h2>
      <div className="input-wrapper">
        <input placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </div>
      <div className="line"></div>
      <div className="footer-bottom">
        <h2>The MovieBox</h2>
        <div className="footer-links">
          <p>About</p>
          <p>Blog</p>
          <p>News</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
