import React from "react";
// import About from "./Component/About/About";
// import AboutTele from "./Component/AboutTele/AboutTele";
// import Content from "./Component/Content/Content";
// import ContentMiddle from "./Component/ContentMiddle/ContentMiddle";
// import Footer from "./Component/Footer/Footer";
// import SubmitForm from "./Component/Form/SubmitForm";
// import Header from "./Component/Header/Header";
import HowItWork from "./Component/How-it-Work/HowItWork";
// import Map from "./Component/Map/Map";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportAnalysis from "./Component/ReportAnalysis/ReportAnalysis";
// import NavbarLinks from "./Component/NavbarLinks/NavbarLinks";
import Home from "./Component/Home/Home";
import Syllabus from "./Component/Syllabus/Syllabus";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/reports-and-analysis" element={<ReportAnalysis />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
