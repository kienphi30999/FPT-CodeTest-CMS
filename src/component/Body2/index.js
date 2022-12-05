import React from "react";
import "./styles.css";
import Avt from "images/avt2.png";
import { Button } from "antd";
import { AiOutlineDownload } from "react-icons/ai";

const Body2 = () => (
  <div className="body2-wrapper">
    <div className="body2">
      <div className="body2-card">
        <div className="body2-card--left">
          <img src={Avt} alt="" />
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
            <Button
              icon={<AiOutlineDownload style={{ fontSize: 30 }} />}
              className="body2-card--right--text3--btn2"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Body2;
