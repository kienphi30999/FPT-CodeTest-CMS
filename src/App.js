import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import PageNotFound from "./screen/PageNotFound";
import CMS from "screen/CMS";
import "antd/dist/antd.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/cms" element={<CMS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
