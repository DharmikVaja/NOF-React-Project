import React, { ReactDOM } from "react";
import About from "./Component/About/About";
import AboutTele from "./Component/AboutTele/AboutTele";
import Content from "./Component/Content/Content";
import ContentMiddle from "./Component/ContentMiddle/ContentMiddle";
import Footer from "./Component/Footer/Footer";
import SubmitForm from "./Component/Form/SubmitForm";
import Header from "./Component/Header/Header";
import HowItWork from "./Component/How-it-Work/HowItWork";
import Map from "./Component/Map/Map";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ReportAnalysis from "./Component/ReportAnalysis/ReportAnalysis";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/how-it-works" element={<HowItWork />}></Route>
        <Route
          path="/reports-and-analysis"
          element={<ReportAnalysis />}
        ></Route>
      </Routes>
      <Header />
      <Content />
      <AboutTele />
      <ContentMiddle />
      <About />
      <SubmitForm />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
