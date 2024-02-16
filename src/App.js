import React from "react";
import "./app.css";
import HowItWork from "./Component/How-it-Work/HowItWork";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ReportAnalysis from "./Component/ReportAnalysis/ReportAnalysis";
import Home from "./Component/Home/Home";
import Syllabus from "./Component/Syllabus/Syllabus";
import WIshlist from "./Component/HeaderLink/Wishlist/WIshlist";
import Download from "./Component/Download/Download";
import Contact from "./Component/Contact/Contact";
import Cart from "./Component/Cart/Cart";
import PrivacyPolicy from "./Component/FooterLinks/PrivacyPolicy/PrivacyPolicy";
import TermsService from "./Component/FooterLinks/TermsService/TermsService";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/reports-and-analysis" element={<ReportAnalysis />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/wishlist" element={<WIshlist />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsService />} />
      </Routes>
    </>
  );
}
export default App;
