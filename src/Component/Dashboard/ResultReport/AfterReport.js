import React, { useState } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import Arrowicon from "../../../assets/Dashboard/dashboard-test-arrow-img.png";
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./result-report.css";
import "../dashboard.css";

const AfterReport = () => {
  const [smShow, setSmShow] = useState(false);
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
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
                        <p className="report-p">Student Name {}</p>
                        <p className="report-p">Class {}</p>
                        <p className="report-p">Email {}</p>
                        <p className="report-p">Student Code {}</p>
                        <p className="report-p">Student Name {}</p>
                        <p className="report-p">Mobile No. {}</p>
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
                        <img
                          src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691577031378test4.png"
                          className="img-fluid"
                          alt=""
                        />
                        <h4>International GK Olympiad</h4>

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
