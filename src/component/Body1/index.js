import React from "react";
import "./styles.css";
import Avt from "../../avt.png";

const Body1 = () => (
  <div className="body1-wrapper">
    <div className="body1">
      <div className="body1-left">
        <div className="body1-left--top">
          <div className="body1-left--top--text1">
            Hello, I’m Brooklyn Gilbert
          </div>
          <div className="body1-left--top--text2">
            I'm a Freelance UI/UX Designer and Developer based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </div>
          <div className="body1-left--top--text3">Say Hello!</div>
        </div>
        <div className="body1-left--bot">
          <div className="body1-left--bot--card">
            <div className="body1-left--bot--card--text1">15 Y.</div>
            <div className="body1-left--bot--card--text2">Experience</div>
          </div>
          <div className="body1-left--bot--card">
            <div className="body1-left--bot--card--text1">250+</div>
            <div className="body1-left--bot--card--text2">Project Completed</div>
          </div>
          <div className="body1-left--bot--card">
            <div className="body1-left--bot--card--text1">58</div>
            <div className="body1-left--bot--card--text2">Happy Client</div>
          </div>
        </div>
      </div>
      <div className="body1-right">
        <img src={Avt} />
      </div>
    </div>
  </div>
);

export default Body1;
