import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "../pages/Jobs";
import Candidates from "../pages/Candidates";
import ScheduleInterview from "../pages/ScheduleInterview";
import SendMail from "../pages/SendMail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="scheduleinterview" element={<ScheduleInterview />} />
        <Route path="sendmail" element={<SendMail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
