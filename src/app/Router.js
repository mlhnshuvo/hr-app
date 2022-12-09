import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "../pages/Jobs";
import Candidates from "../pages/Candidates";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="candidates" element={<Candidates />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
