import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import SyPDF1 from "../../../assets/pdf/syllabus/Syllabus_Class_Nursery.pdf";
import SyPDF2 from "../../../assets/pdf/syllabus/Syllabus_Class_LKG.pdf";
import SyPDF3 from "../../../assets/pdf/syllabus/Syllabus_Class_UKG.pdf";
import SyPDF4 from "../../../assets/pdf/syllabus/Syllabus_Class_1.pdf";
import SyPDF5 from "../../../assets/pdf/syllabus/Syllabus_Class_2.pdf";
import SyPDF6 from "../../../assets/pdf/syllabus/Syllabus_Class_3.pdf";
import SyPDF7 from "../../../assets/pdf/syllabus/Syllabus_Class_4.pdf";
import SyPDF8 from "../../../assets/pdf/syllabus/Syllabus_Class_5.pdf";
import SyPDF9 from "../../../assets/pdf/syllabus/Syllabus_Class_6.pdf";
import SyPDF10 from "../../../assets/pdf/syllabus/Syllabus_Class_7.pdf";
import SyPDF11 from "../../../assets/pdf/syllabus/Syllabus_Class_8.pdf";
import SyPDF12 from "../../../assets/pdf/syllabus/Syllabus_Class_9.pdf";
import SyPDF13 from "../../../assets/pdf/syllabus/Syllabus_Class_10.pdf";
import "./olympSyllabus.css"
import "../dashboard.css"
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const OlymSyllabus = () => {
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop/>
          </header>
          <div className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set register-border">
                  <div className="head-for-all-page">
                    <div>
                      <h3 className="same-head-dash mb-2">OLYMPIADS SYLLABUS</h3>
                      <p className="same-para-dash ps-2">You can see your syllabus here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="olympaid-section dash-syllabus">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="olym-syllabus-text">
                      <h3>NOF Junior Olympiads</h3>
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
                    <a href={SyPDF2} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> LKG</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF3} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> UKG</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF4} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 1</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF5} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 2</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF6} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 3</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF7} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 4</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF8} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 5</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/*  */}
            <section className="olympaid-section dash-syllabus">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="olym-syllabus-text">
                      <h3>NOF Senior Olympiads</h3>
                      <h6>For Classes 6 to 10</h6>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 ">
                    <a href={SyPDF9} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 6</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF10} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 7</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF11} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 8</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF12} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 9</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href={SyPDF13} className="syllabus-a" target="_blank">
                      <div className="syllabus-home-box">
                        <p> CLASS 10</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlymSyllabus;
