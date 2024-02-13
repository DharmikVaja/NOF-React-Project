import React from "react";
import "../../app.css";
import "./content.css";

const Content = () => {
  return (
    <>
      <div className="story-home-sec spacer-y ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="set-position">
                <h1>
                  <span>Animation Story &amp; </span>Artificial Intelligence
                  based International Olympiads
                </h1>
                <p>
                  NOF offers online International Olympiad assessments in Math,
                  Science, English, Hindi, GK, Cyber, and French for students
                  from Nursery to Class 10.
                </p>
                <br />
                <p>
                  Trusted by 4500+ schools across 14+ countries, we're
                  transforming education.
                </p>
                <div className="banner-story-btn">
                  <a href="#" className="new-yellow-btn">
                    Click Here To Register
                  </a>
                  <a href="#" className="new-white-btn">
                    Click Here To Buy Practice Books
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show-description">
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-lg-10 col-md-12">
              <div className="inner-describe">
                <ul>
                  <li>
                    <p>
                      <span>4500+ </span> Schools
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>14+ </span> Countries
                    </p>
                  </li>
                  <li>
                    <p>1M+ Tests conducted</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
