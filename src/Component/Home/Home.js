import React from "react";
import "../../app.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import AboutTele from "../AboutTele/AboutTele";
import ContentMiddle from "../ContentMiddle/ContentMiddle";
import About from "../About/About";
import SubmitForm from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
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
};

export default Home;
