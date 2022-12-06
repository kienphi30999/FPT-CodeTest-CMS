import React from "react";
import "./styles.css";

import Header from "component/Header";
import Body1 from "component/Body1";
import Body2 from "component/Body2";
import Footer from "component/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Body1 />
      <Body2 />
      <Footer />
    </div>
  );
};

export default Home;
