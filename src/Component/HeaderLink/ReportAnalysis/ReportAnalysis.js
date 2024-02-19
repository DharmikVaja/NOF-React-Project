import React, { useState } from "react";
import SubmitForm from "../../Form/SubmitForm";
import Map from "../../Map/Map";
import Footer from "../../Footer/Footer";
import "./report_analysis.css";
import reportAnalysis from "../../../assets/report-analysis.png";
import Header from "../../Header/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import report1 from "../../../assets/pdf/report/report1.pdf";
import report2 from "../../../assets/pdf/report/report2.pdf";

const ReportAnalysis = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Header />
      <div className="set-top-margin-all"></div>
      <div class="report-analysis-sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6">
              <div class="content">
                <h1>
                  <span>Artificial Intelligence </span>
                  <br />
                  based student report &amp; analysis
                </h1>
                <p>
                  NOF's groundbreaking technology pinpoints where students need
                  help in their learning and then provides a structured plan to
                  fill those gaps using computer-generated analysis.
                </p>
                <Button
                  variant="primary"
                  className="new-yellow-btn"
                  onClick={handleShow}
                >
                  View Report
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <h2>Artificial-Intelligence based Reports & Analysis</h2>
                  </Modal.Body>
                  <Modal.Footer className=" d-flex justify-content-around">
                    <a href={report1} target="_blank">
                      <Button variant="primary" className="common-btn">
                        FOR CLASSES NURSERY TO 5<p>(View Report)</p>
                      </Button>
                    </a>
                    <a href={report2} target="_blank">
                      <Button variant="primary" className="common-btn">
                        FOR CLASSES 6 TO 10 <p>(View Report)</p>
                      </Button>
                    </a>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div class="col-lg-7 col-md-6">
              <div>
                <img src={reportAnalysis} class="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubmitForm />
      <Map />
      <Footer />
    </div>
  );
};

export default ReportAnalysis;
