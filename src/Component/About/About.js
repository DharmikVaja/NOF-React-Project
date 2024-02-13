import React from "react";
import AboutImage from "../../assets/what-is-nof-image.png";
import "./about.css";
import WhyNOF2 from "../../assets/WhyNof-2.png";
import ImgVideoCall from "../../assets/video-calls-img.png";

const About = () => {
  return (
    <>
      <div className="about-use-sec spacer-y ">
        <div className="container">
          <div className="row about-details align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-heading">
                <h2>What is NOF International Olympiads?</h2>
              </div>
              <p className="all-pgraph">
                Children love cartoons as compared to learning from books.
                Gamified animated content motivates them and encourages them to
                take actions.
                <br />
                <br />
                NOF Junior is a gamified assessment platform and not a regular
                pen and paper-based test, the questions asked are interactive,
                children can touch the cartoons and other elements on the screen
                , questions have voice support for better understanding. This
                makes the entire exercise very entertaining &amp; engaging.
              </p>
            </div>
            <div className="col-lg-7 col-md-6 d-flex justify-content-end">
              <img src={AboutImage} className="img-fluid" alt="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-use-sec spacer-y">
        <div className="container">
          <div className="row about-details align-items-center">
            <div className="col-lg-7 col-md-6 ">
              <img src={WhyNOF2} className="img-fluid" alt="icon" />
            </div>
            <div className="col-lg-5 col-md-6 d-flex flex-column">
              <div className="about-heading">
                <h2>Why NOF ?</h2>
              </div>
              <p className="all-pgraph">
                Innovative Assessments : We pioneer education with
                animation-story &amp; AI-based assessments for Nursery to KG 2
                and AI-driven exams, including exclusive math papers by Dr. RD
                Sharma, for classesNameclassName 6 to 10.
                <br />
                <br />
                Comprehensive Analysis : Our AI technology provides detailed
                analysis reports, evaluating not just knowledge but cognitive
                attributes like attention and memory.
                <br />
                <br />
                International Recognition : Participants receive coveted
                international certificates from London, UK, enhancing their
                global profile.
                <br />
                <br />
                User-Friendly Experience : We offer voice support for better
                question understanding, flexible exam scheduling to suit both
                schools and parents, and the convenience of allowing students to
                appear using any device.
                <br />
                <br />
                Register yourself with NOF and be part of the educational
                revolution. CTA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="video-calls-sec w-100">
        <img className="img-fluid" src={ImgVideoCall} />
      </div>
    </>
  );
};

export default About;
