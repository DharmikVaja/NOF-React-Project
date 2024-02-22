import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "../dashboard.css";
import "./faq.css";
import Accordion from "react-bootstrap/Accordion";
import { AccordionBody } from "react-bootstrap";
import { Link } from "react-router-dom";

const FAQs = () => {
  return (
    <div>
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
                      <div>
                        <h3>FAQS (FREQUENTLY ASKED QUESTIONS)</h3>
                        <p>You can see your frequently asked questions here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pad-set ">
                <div className="faq-btn gap-4 d-flex justify-content-end">
                  <Link to="/faqs-ticket" className="common-all-btn">Create a ticket</Link>
                  <button className="border-all-btn">Ticket History</button>
                </div>
                <div className="inter-grey-box shadow-set pad-set mt-5">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        How can I change my profile picture? How many questions
                        are there in the NOF International Olympiad examination?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          You can change your profile picture by following these
                          steps: Go to "Account Settings" &lt;&lt; Navigate to
                          "User Profile" &gt;&gt; Click on the pencil icon
                          located next to your current profile picture.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        What devices can I use to take the exam?
                      </Accordion.Header>
                      <Accordion.Body>
                        To achieve the optimal user experience, consider taking
                        the exam on a laptop or desktop computer. However, it is
                        also possible to attempt the exam on a smartphone.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Is there a demo/mock test available for practice?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, a free demo/mock test is available for all
                        students. It helps you become familiar with the exam
                        portal's interface. Please note that the actual
                        examination will consist of 30 questions from a single
                        subject.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Is camera usage mandatory during the exam?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, video proctoring is used in this exam, and allowing
                        the camera to be on is a mandatory requirement to appear
                        for the exam. Any unneeded interference during the exam
                        will be monitored and may lead to disqualification.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        What should I avoid doing during the exam?
                      </Accordion.Header>
                      <Accordion.Body>
                        DO NOT refresh the page or switch browser tabs or
                        windows during the exam, as it will automatically submit
                        and terminate the exam.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        What happens if the exam stops due to technical issues
                        or other reasons?
                      </Accordion.Header>
                      <Accordion.Body>
                        If the exam stops for any reason, like technical issues,
                        internet loss, system crashes, server problems, or any
                        valid reason, it will resume from the exact point where
                        it stopped.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Can I listen to the questions more than once?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, every question comes with voice support, and you
                        can listen to the question as many times as you want by
                        clicking on the play icon.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        What is the duration of the exam?
                      </Accordion.Header>
                      <Accordion.Body>
                        The duration of the exam is 45 minutes.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        How do I answer the questions in the exam?
                      </Accordion.Header>
                      <Accordion.Body>
                        To answer the questions, you need to click on the
                        correct option from the multiple choices provided. Only
                        one option is correct.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                        How many questions are there in the NOF International
                        Olympiad examination?
                      </Accordion.Header>
                      <Accordion.Body>
                        The NOF International Olympiad exam consists of 30
                        Multiple Choice Questions (MCQs).
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
