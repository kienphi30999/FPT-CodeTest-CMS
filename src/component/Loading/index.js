import { Spin } from "antd";
import React from "react";
import "./styles.css";

const Loading = (props) => {
  return (
    <div className="loading-wrapper">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
