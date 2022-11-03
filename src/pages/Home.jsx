import React from "react";
import "../App.css";
import { FaGithub, FaSlack } from "react-icons/fa";
import zuri from "../Images/zuri.png";
import i4g from "../Images/i4g.png";
import profile from "../Images/profile__img.png";
import { BiShare } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    
    <>
      <div className="home">
        <div className="share">
          <BiShare />
        </div>
        <div className="profile-section">
          <div>
            <img src={profile} id="profile__img" alt="Profile_pic" />
          </div>
          <div id="twitter">
            <a href="https://twitter.com/femade">Adedokun Femi</a>
          </div>
          {/* <div id="slack">@femade</div> */}
        </div>
        <div className="link-section">
          <div className="link" id="btn__zuri">
            <a href="https://training.zuri.team/">Training Link</a>
          </div>
          <div className="link" id="books">
            <a href="http://books.zuri.team/">Zuri Books</a>
            <br />
            <sub>This is where you find books about design and coding</sub>
          </div>
          <div className="link" id="book__python">
            <a href="https://books.zuri.team/python-for-beginners?ref_id=cermuel">
              Zuri Books for Python
            </a>{" "}
            <br />
            <sub>Greatest and best explained python books for beginners</sub>
          </div>
          <div className="link" id="pitch">
            <a href="https://background.zuri.team">
              Background Check On Coders
            </a>
            <br />
            <sub>
              My company, is developing a defined software to help do a
              background check on coders
            </sub>
          </div>
          <div className="link" id="book__design">
            <a href="https://books.zuri.team/design-rules">Free Design Book</a>{" "}
            <br />
            <sub>Top books for designers, easy to learn and understand</sub>
          </div>{" "}
          <div className="link" id="contact">
            <Link to="/contact">
              <a>Contact Me</a>{" "}
            </Link>
          </div>
          {/* <button onClick={() => {
            history.push("/contact")
          }} className="link" id="contact">

            <Link to="/contact">
              <a>Contact Me</a>
            </Link>
          </button> */}
          
        </div>
        <div className="social-section">
          <FaSlack />
          <FaGithub />
        </div>
      </div>
      <footer>
        <div id="zuri_internship">
          <img src={zuri} alt="Zuri.internship" />
        </div>
        <div className="footer-text">HNG Internship 9 Frontend Task</div>
        <div className="i4g">
          <img src={i4g} alt="Ingressive for good " />
        </div>
      </footer>
    </>
  );
};

export default Home;
