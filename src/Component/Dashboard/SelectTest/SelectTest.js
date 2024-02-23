import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
// import "../dashboard.css";
import "./select-test.css"
import Arrowicon from "../../../assets/Dashboard/dashboard-test-arrow-img.png"
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png"
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const SelectTest = () => {
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop/>
          </header>
      
          <div classname="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set register-border">
                  <div className="head-for-all-page">
                    <img
                      src={AssesmentIcon}
                      className="head-icon"
                      alt=""
                    />
                    <div>
                      <h3>NOF Olympiad Exams</h3>
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
                    <h4>Demo test</h4>
                    <Link className="cursorPointerClass" to="/demo-test">
                      <img src={Arrowicon} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-new">
                    <h4>NOF International Olympiad</h4>
                    <Link className="cursorPointerClass" to="/demo-test">
                      <img src={Arrowicon} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTest;
