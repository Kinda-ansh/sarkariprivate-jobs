// allRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/homepage";
import SarkariJobs from "../Pages/sarkariJobs";
import PrivateJobs from "../Pages/privateJobs";
import Results from "../Pages/topResult";
import News from "../Pages/news";
import AdmitCard from "../Pages/admitCard";
import AnswerKey from "../Pages/answerKey";
import ContactUs from "../Pages/contactUs";
import Privcy from "../Pages/Privcy";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sarkarijobs" element={<SarkariJobs />} />
      <Route path="/privatejobs" element={<PrivateJobs />} />
      <Route path="/results" element={<Results />} />
      <Route path="/news" element={<News />} />
      <Route path="/admit-card" element={<AdmitCard />} />
      <Route path="/answer-key" element={<AnswerKey />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<Privcy />} />
    </Routes>
  );
};

export default AllRoutes;
