import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png"
import DemoTest1 from "../../../assets/Dashboard/demo-test-1.png"
import DemoTest2 from "../../../assets/Dashboard/demo-test-2.png"
import DemoTest3 from "../../../assets/Dashboard/demo-test-3.png"
import "./demo-test.css"
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const DemoTest = () => {
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop/>
          </header>
          {/*  */}
          <section className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set register-border d-flex justify-content-between">
                  <div className="head-for-all-page">
                    <img
                      src= {AssesmentIcon}
                      className="head-icon"
                      alt=""
                    />
                    <div>
                      <h3>Demo Test</h3>
                      <p>You can see your all Tests here</p>
                    </div>
                  </div>
                  <Link className="common-btn" to="/select-test">Back</Link>
                </div>
              </div>
            </div>
            <div className="pad-set">
              <div className="row">
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src={DemoTest1}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International GK Olympiad</h4>
                    <div className="d-flex justify-content-center gap-2">
                      <Link className="common-btn start-exam-btn" to="/instructions">
                        Start Demo test
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src={DemoTest2}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International Math Olympiad</h4>
                    <div className="d-flex justify-content-center gap-2">
                    <Link className="common-btn start-exam-btn" to="/instructions">
                        Start Demo test
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src={DemoTest3}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International Science Olympiad</h4>
                    <div className="d-flex justify-content-center gap-2">
                    <Link className="common-btn start-exam-btn" to="/instructions">
                        Start Demo test
                      </Link>
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

export default DemoTest;
