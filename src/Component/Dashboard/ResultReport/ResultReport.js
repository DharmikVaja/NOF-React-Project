import React, { useState } from "react";
import Arrowicon from "../../../assets/Dashboard/dashboard-test-arrow-img.png";
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png";
import { Link } from "react-router-dom";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "../dashboard.css";
import "./result-report.css";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Criteria from "../../../assets/Dashboard/Criteria+Senior.pdf";

const ResultReport = () => {
  return (
    <div>
      <div>
        <div className="dashboard-layout ">
          <div className="inner-dash-bpx ">
            <header className="main-header login-header-home">
              <NavbarDashboard />
              <ScrollToTop />
            </header>
            <section className="dash-outer-box pad-set register-border">
              <div className="row">
                <div className="col-md-12">
                  <div className="pad-set register-border ">
                    <div className="head-for-all-page">
                      <img src={AssesmentIcon} className="head-icon" alt="" />
                      <div>
                        <h3>RESULTS AND REPORTS</h3>
                        <p>You can see your all Exams here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pad-set">
                <div className="row">
                  <div className="col-md-4">
                    <div className="test-box-new">
                      <h4>NOF INTERNATIONAL OLYMPIAD RESULTS</h4>
                      <Link to="/after-report" className="cursorPointerClass">
                        <img src={Arrowicon} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="test-box-new">
                      <h4>VIEW AWARD & RECOGNITION CRITERIA</h4>
                      <a
                        type="button "
                        target="_blank"
                        href={Criteria}
                        className="cursorPointerClass"
                        rel="noreferrer"
                      >
                        <img src={Arrowicon} alt="" />
                      </a>
                    </div>
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

export default ResultReport;
