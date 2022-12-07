import React from "react";
import "./styles.css";
import Avt from "images/avt2.png";
import { Button } from "antd";
import { AiOutlineDownload } from "react-icons/ai";

const Body2 = (props) => {
  const { bodyTitle, bodyDescription, leftBodyBtnText, rightBodyBtnText } =
    props;
  return (
    <div className="body2-wrapper">
      <div className="body2">
        <div className="body2-card">
          <div className="body2-card--left">
            <img src={Avt} alt="" />
          </div>
          <div className="body2-card--right">
            <div className="body2-card--right--text1">{bodyTitle}</div>
            <div>
              <div className="body2-card--right--text2">{bodyDescription}</div>
            </div>
            <div className="body2-card--right--text3">
              <div className="body2-card--right--text3--btn1">
                {leftBodyBtnText}
              </div>
              <div className="body2-card--right--text3--btn2">
                <AiOutlineDownload style={{ fontSize: 30 }} />
                {rightBodyBtnText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
