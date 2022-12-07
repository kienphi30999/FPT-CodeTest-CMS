import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClickBackHome = () => {
    navigate("/");
  };
  return (
    <div className="error-page--wrapper">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={handleClickBackHome} type="primary">
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default PageNotFound;
