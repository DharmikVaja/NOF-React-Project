import React, { useEffect } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "./instruction.css";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Instruction = () => {
  const navigate = useNavigate();
  const openFrontCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      navigate("/demo-quiz");
      // Use the stream to display the camera feed or perform other actions
    } catch (error) {
      console.error("Error accessing camera:", error);
      toast.error("Failed to access camera. Please check your permissions.");
    }
  };
  return (
    <div>
    <ToastContainer/>
      <div>
        <div className="dashboard-layout ">
          <div className="inner-dash-bpx ">
            <header className="main-header login-header-home">
              <NavbarDashboard />
              <ScrollToTop />
            </header>
            <section className="dash-outer-box">
              <div className="row">
                <div className="col-md-12">
                  <div className=" pad-set register-border">
                    <div className="head-for-all-page">
                      <img
                        src="assets/img/exam-icon.png"
                        className="head-icon"
                        alt=""
                      />
                      <div>
                        <h3>NOF Olympiads exam Instructions</h3>
                        <p>Read the instructions carefully</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" pad-set">
                <div className="row">
                  <div className="col-md-12">
                    <div className="inter-grey-box shadow-set pad-set">
                      <ul className="instruct-inner-content">
                        <li>
                          <h4>Exam Structure:</h4>
                          <p>
                            1. This NOF International Olympiad examination has
                            30 MCQs (Multiple Choice Questions).
                          </p>
                          <p>
                            2. The student needs to click on the correct option
                            from the multiple choices. There can ONLY BE ONE
                            correct answer.
                          </p>
                          <p>3. There is NO NEGATIVE marking.</p>
                          <p>4. The duration of the exam is 45 minutes.</p>
                        </li>
                        <li>
                          <h4>Question Assistance:</h4>
                          <p>
                            1. Every question comes with a voice support (the
                            child can listen to the question as many times as
                            he/she wants).
                          </p>
                          <p>
                            2. Parents of children from Nursery to Grade 1 may
                            assist their wards in understanding the questions if
                            needed.
                          </p>
                        </li>
                        <li>
                          <h4>Technical Considerations:</h4>
                          <p>
                            1. If the exam stops for any reason, like technical
                            issues, internet loss, system crashes, server
                            problems, or any valid reason, it will resume from
                            the exact point where it stopped.
                          </p>
                          <p>
                            2. DO NOT refresh the page or switch browser tabs or
                            windows during the exam, as it will automatically
                            submit and terminate the exam.
                          </p>
                          <p>
                            3. Utilize a fast, dependable, and consistent
                            internet connection. Avoid using an internet
                            connection that experiences frequent disconnections.
                            We recommend a minimum upload speed of 512 kbps.
                          </p>
                        </li>
                        <li>
                          <h4>Browser Requirements:</h4>
                          <p>
                            Please make sure you are using the latest version of
                            Google Chrome. If you are a Mac user, DO NOT use
                            Safari; ONLY USE GOOGLE CHROME.
                          </p>
                        </li>
                        <li>
                          <h4>Video Proctoring and Camera Usage:</h4>
                          <p>
                            This exam is powered by video proctoring, so any
                            unneeded interference by any individual during the
                            exam will be monitored and may lead to
                            disqualification. Therefore, you must ALLOW the
                            camera to be on. This is a mandatory requirement in
                            order to appear for the exam.
                          </p>
                        </li>
                        <li>
                          <h4>Demo Test Information:</h4>
                          <p>
                            We've designed a free demo/mock test available to
                            all students. It serves as a tool to familiarize you
                            with our exam portal's interface. This demo includes
                            questions from various subjects for your class.
                            Please note that your actual examination will
                            consist of all 30 questions from a single subject.
                            Please don't be confused by this difference..
                          </p>
                        </li>
                        <li>
                          <h4>Device Compatibility:</h4>
                          <p>
                            To achieve the optimal user experience, consider
                            taking the exam on a laptop or desktop computer.
                            However, it is also possible to attempt the exam on
                            a smartphone.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex mt-4 gap-2 justify-content-center">
                      <Link
                        className="common-all-btn"
                        onClick={openFrontCamera}
                      >
                        Take Test
                      </Link>
                      <Link className="common-all-btn" to="/demo-test">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
