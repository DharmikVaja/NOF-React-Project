import React, { useState } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import Arrowicon from "../../../assets/Dashboard/dashboard-test-arrow-img.png";
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png";
import { Link } from "react-router-dom";
import ProImg1 from "../../../assets/product/pro1.png";
import ProImg3 from "../../../assets/product/pro3.png";
import ProImg6 from "../../../assets/product/Pro6.png";
import Modal from "react-bootstrap/Modal";
import "./result-report.css";
import "../dashboard.css";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const AfterReport = () => {
  const [smShow, setSmShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const quizmark = localStorage.getItem("exam-score")
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          <div className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set register-border">
                  <div className="head-for-all-page">
                    <img src={AssesmentIcon} className="head-icon" alt="" />
                    <div>
                      <h3>RESULTS AND REPORTS</h3>
                      <p>You can see your all Exams here</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="pad-set report-border">
                      <div className="student-report-details">
                        <p className="report-p">Student Name: {}Hibba</p>
                        <p className="report-p">Class: {}8th</p>
                        <p className="report-p">Email: {}stu503924@misdoha.com</p>
                         <p className="report-p">Student Code: {} ind23</p>
                        <p className="report-p">Mobile No.: {}987543210</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="pad-set">
                  <div className="student-details-main">
                    <h5>NOF INTERNATIONAL OLYMPIAD RESULTS</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="test-box-inner">
                        <img src={ProImg6} className="img-fluid" alt="" />
                        <h4>International GK Olympiad</h4>

                        <Link
                          to
                          className="addtocartbtn"
                          variant="primary"
                          onClick={handleShow}
                        >
                          View Results Report
                        </Link>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>GK Result</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            You scored {quizmark} out of / 30
                          </Modal.Body>
                          
                        </Modal>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="test-box-inner">
                        <img src={ProImg3} className="img-fluid" alt="" />
                        <h4>International Math Olympiad</h4>

                        <Link
                          onClick={() => setSmShow(true)}
                          className="addtocartbtn"
                        >
                          View Results Report
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="test-box-inner">
                        <img src={ProImg1} className="img-fluid" alt="" />
                        <h4>International Science Olympiad</h4>

                        <Link
                          onClick={() => setSmShow(true)}
                          className="addtocartbtn"
                        >
                          View Results Report
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
                  <Modal.Body>Result will be launched soon!!...</Modal.Body>
                </Modal.Header>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterReport;
