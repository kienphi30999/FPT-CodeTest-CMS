import React from "react";
import "./styles.css";
import Avt from "../../avt2.png";

const Body2 = () => (
  <div className="body2-wrapper">
    <div className="body2">
      <div className="body2-card">
        <div className="body2-card--left">
          <img src={Avt} />
        </div>
        <div className="body2-card--right">
          <div className="body2-card--right--text1">
            I am Professional User Experience Designer
          </div>
          <div>
            <div className="body2-card--right--text2">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </div>
            <div className="body2-card--right--text2">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </div>
          </div>
          <div className="body2-card--right--text3">
            <div className="body2-card--right--text3--btn1">My Project</div>
            <div className="body2-card--right--text3--btn2">Download CV</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Body2;
