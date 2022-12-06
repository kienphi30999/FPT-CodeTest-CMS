import React from "react";
import "./styles.css";
import Avt from "images/avt.png";

const Body1 = (props) => {
  const { headerTitle, headerDescription, headerBtnText, headerStatistic } =
    props;
  return (
    <div className="body1-wrapper">
      <div className="body1">
        <div className="body1-left">
          <div className="body1-left--top">
            <div className="body1-left--top--text1">{headerTitle}</div>
            <div className="body1-left--top--text2">{headerDescription}</div>
            <div className="body1-left--top--text3">{headerBtnText}</div>
          </div>
          <div className="body1-left--bot">
            {headerStatistic &&
              headerStatistic.map((item, id) => (
                <div key={id} className="body1-left--bot--card">
                  <div className="body1-left--bot--card--text1">
                    {item.stat}
                  </div>
                  <div className="body1-left--bot--card--text2">
                    {item.unit}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="body1-right--wrapper">
          <img src={Avt} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body1;
