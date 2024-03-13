import React from "react";
import NavbarDashboard from "../../Dashboard/UserDashboard/NavbarDashboard";
import "./select-test.css";
// import Arrowicon from "../../../assets/Dashboard/dashboard-test-arrow-img.png"
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import DemoTest1 from "../../../assets/Dashboard/demo-test-1.png";
import DemoTest2 from "../../../assets/Dashboard/demo-test-2.png";
import DemoTest3 from "../../../assets/Dashboard/demo-test-3.png";
import { Button } from "react-bootstrap";

const NOFInterNatExam = () => {
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          {/*  */}
          <section className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set register-border d-flex justify-content-between">
                  <div className="head-for-all-page">
                    <img src={AssesmentIcon} className="head-icon" alt="" />
                    <div>
                      <h3>NOF INTERNATIONAL OLYMPIAD</h3>
                      <p>You can see your all Tests here</p>
                    </div>
                  </div>
                  <Link className="common-btn" to="/select-test">
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="pad-set">
              <div className="row">
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img src={DemoTest1} className="img-fluid" alt="" />
                    <h4>International GK Olympiad</h4>
                    <div>
                      <p> Exam Starts in: </p>
                      <div className="reverse-timer-sec">
                        <div className="inner">0 D</div>
                        <div className="inner">0 H</div>
                        <div className="inner">0 M</div>
                        <div className="inner">0 S</div>
                      </div>
                      <p> Feb 5, 2024- 9:00 AM - 8:00 PM IST </p>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        className="common-btn start-exam-btn"
                        to="/instructions"
                        disabled
                      >
                        Exam Missed
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img src={DemoTest2} className="img-fluid" alt="" />
                    <h4>International Math Olympiad</h4>
                    <div>
                      <p> Exam Starts in: </p>
                      <div className="reverse-timer-sec">
                        <div className="inner">0 D</div>
                        <div className="inner">0 H</div>
                        <div className="inner">0 M</div>
                        <div className="inner">0 S</div>
                      </div>
                      <p> Feb 19, 2024- 9:00 AM - 8:00 PM IST </p>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        className="common-btn start-exam-btn"
                        to="/instructions"
                        disabled
                      >
                        Exam Missed
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img src={DemoTest3} className="img-fluid" alt="" />
                    <h4>International Science Olympiad</h4>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        className="common-btn start-exam-btn"
                        to="/instructions"
                        disabled
                      >
                        Exam Submitted
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NOFInterNatExam;
