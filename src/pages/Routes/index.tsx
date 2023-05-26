import React from "react";
import Main from "..";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PageRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoute;
