import React from "react";
import SubmitForm from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import "./report_analysis.css";
import reportAnalysis from "../../assets/report-analysis.png";
import Header from "../Header/Header";

const ReportAnalysis = () => {
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
                  {" "}
                  <span>Artificial Intelligence </span>
                  <br />
                  based student report &amp; analysis
                </h1>
                <p>
                  NOF's groundbreaking technology pinpoints where students need
                  help in their learning and then provides a structured plan to
                  fill those gaps using computer-generated analysis.
                </p>
                <div class="">
                  <a class="new-yellow-btn">View Reports</a>
                </div>
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
