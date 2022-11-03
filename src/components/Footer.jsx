import React from "react";
import zuri from ".../Images/zuri.png";
import i4g from ".../Images/i4g.png";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div id="zuri_internship">
        <img src={zuri} alt="Zuri.internship" />
      </div>
      <div className="footer-text">HNG Internship 9 Frontend Task</div>
      <div className="i4g">
        <img src={i4g} alt="Ingressive for good " />
      </div>
    </footer>
  );
};

export default Footer;
