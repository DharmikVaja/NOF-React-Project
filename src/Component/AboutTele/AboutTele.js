import React from "react";
import aboutTSImage from "../../assets/about-telescope-image.png";
import "./about-tele.css";

const AboutTele = () => {
  return (
    <div>
      <div className="about-use-sec spacer-y">
        <div className="container">
          <div className="align-items-center row">
            <div className="col-lg-7 col-md-6">
              <div>
                <img
                  className="img-fluid abtIMage"
                  src={aboutTSImage}
                  // background-image="../../assets/about-telescope-image.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="about-heading">
                <h2>About us</h2>
                <p className="bold-heading">
                  DO NOT SETTLE FOR THE ORDINARY.
                  <br />
                  GO INTERNATIONAL
                </p>
                <p className="all-pgraph">
                  We're the world's only Olympiad that leverages cutting-edge
                  Artificial Intelligence technology to assess students,
                  identify their knowledge gaps, and provide personalized
                  remedial plans. This opportunity is open to students from
                  Nursery to Grade 10, allowing them to participate and excel on
                  a global stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTele;
