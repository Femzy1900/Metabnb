import React from "react";
import "../App.css";
import zuri from "../Images/zuri.png";
import i4g from "../Images/i4g.png";
const Contact = () => {
  const name = "FEMADE";
  const submitForm = () => {};
  return (
    <>
      <div className="contact">
        <div className="heading">Contact Me</div>
        <div className="supporting-text">
          Hi there, contact me to ask me about anything you have in mind.
        </div>
        <form>
          <div className="firstname">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />{" "}
          </div>
          <div className="lastname">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="other-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              required
            />
          </div>
          <div className="other-inputs">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" required />
            <div>
              You agree to providing your data to {name} who may contact you.
            </div>
          </div>
          <button type="submit" id="btn_submit" onClick={submitForm}>
            Send message
          </button>
        </form>{" "}
      </div>{" "}
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

export default Contact;
