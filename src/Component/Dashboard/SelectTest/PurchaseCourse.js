import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png";
import DemoTest1 from "../../../assets/Dashboard/demo-test-1.png";
import DemoTest2 from "../../../assets/Dashboard/demo-test-2.png";
import DemoTest3 from "../../../assets/Dashboard/demo-test-3.png";
import "./demo-test.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const PurchaseCourse = () => {
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
                      <h3>Demo Test</h3>
                      {/* <p>You can see your all Tests here</p> */}
                    </div>
                  </div>
                  <Link className="common-btn" to="/demo-test">
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className=" m-5">
              <p>
                Thanks for purchasing the course !! Once your exams are scheduled
                will appear here . For more Details :{" "}
                <Link to="/transaction-history">Click Here</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCourse;
