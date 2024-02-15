import React from "react";
import "./app.css";
// import About from "./Component/About/About";
// import AboutTele from "./Component/AboutTele/AboutTele";
// import Content from "./Component/Content/Content";
// import ContentMiddle from "./Component/ContentMiddle/ContentMiddle";
// import Footer from "./Component/Footer/Footer";
// import SubmitForm from "./Component/Form/SubmitForm";
// import Header from "./Component/Header/Header";
// import Map from "./Component/Map/Map";
import HowItWork from "./Component/How-it-Work/HowItWork";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ReportAnalysis from "./Component/ReportAnalysis/ReportAnalysis";
import Home from "./Component/Home/Home";
import Syllabus from "./Component/Syllabus/Syllabus";
import WIshlist from "./Component/Wishlist/WIshlist";
import Download from "./Component/Download/Download";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/reports-and-analysis" element={<ReportAnalysis />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/wishlist" element={<WIshlist />} />
        <Route path="/downloads" element={<Download />} />
      </Routes>
    </>
  );
}
export default App;
