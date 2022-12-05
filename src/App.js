import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import PageNotFound from "./screen/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
