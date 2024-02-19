import React from "react";
import Form from "../../Form/SubmitForm";
import Map from "../../Map/Map";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./syllabus.css";
import SyPDF1 from "../../../assets/pdf/syllabus/Syllabus_Class_Nursery.pdf";
import SyPDF2 from "../../../assets/pdf/syllabus/Syllabus_Class_LKG.pdf";
import SyPDF3 from "../../../assets/pdf/syllabus/Syllabus_Class_UKG.pdf";
import SyPDF5 from "../../../assets/pdf/syllabus/Syllabus_Class_1.pdf";
import SyPDF4 from "../../../assets/pdf/syllabus/Syllabus_Class_2.pdf";
import SyPDF6 from "../../../assets/pdf/syllabus/Syllabus_Class_3.pdf";
import SyPDF7 from "../../../assets/pdf/syllabus/Syllabus_Class_4.pdf";
import SyPDF8 from "../../../assets/pdf/syllabus/Syllabus_Class_5.pdf";
import SyPDF9 from "../../../assets/pdf/syllabus/Syllabus_Class_6.pdf";
import SyPDF10 from "../../../assets/pdf/syllabus/Syllabus_Class_7.pdf";
import SyPDF11 from "../../../assets/pdf/syllabus/Syllabus_Class_8.pdf";
import SyPDF12 from "../../../assets/pdf/syllabus/Syllabus_Class_9.pdf";
import SyPDF13 from "../../../assets/pdf/syllabus/Syllabus_Class_10.pdf";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const Syllabus = () => {
  return (
    <div>
      <Header />
      <ScrollToTop/>
      <div className="set-top-margin-all spacer-y"></div>
      <div className="head-practice-test">
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-lg-6 col-md-12">
              <div className="syllabus-heading text-center">
                <h1>NOF International Olympiads Syllabus </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <section className="olympaid-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="syllabus-text">
                <h3>NOF Junior International Olympiads</h3>
                <h6>For Classes Nursery to 5</h6>
                <span></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <a href={SyPDF1} className="syllabus-a" target="_blank">
                <div className="syllabus-home-box">
                  <p> NURSERY</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF2}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> LKG</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF3}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> UKG</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF4}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 1</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF5}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 2</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF6}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 3</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF7}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 4</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF8}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 5</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="olympaid-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="syllabus-text">
                <h3>NOF International Olympiads</h3>
                <h6>For Classes 6 to 10</h6>
                <span></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <a
                href={SyPDF9}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 6</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF10}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 7</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF11}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 8</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF12}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 9</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href={SyPDF13}
                className="syllabus-a"
                target="_blank"
              >
                <div className="syllabus-home-box">
                  <p> CLASS 10</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <Form />
      <Map />
      <Footer />
    </div>
  );
};

export default Syllabus;
