import React, { useState } from "react";
import "../../app.css";
import "./content.css";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
// import "../Modal/RegisterModal/RegModal.css";

const Content = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="story-home-sec ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="set-position">
                <h1 className="main-content-heading">
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
                  <Button
                    className="new-yellow-btn "
                    variant="primary"
                    onClick={handleShow}
                  >
                    Click Here to Register
                  </Button>
                  <Button
                    className="new-white-btn "
                    variant="primary"
                    onClick={handleShow}
                  >
                    Click Here To Buy Practice Books
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="reg-modal-text modal-body">
                        <h2>Your Learning, Your Way!</h2>
                        <p>Select Your Region and Class Preference.</p>
                        <div className="form-modal">
                          <div className="mb-3">
                            <div className="modal-form-country">
                              <label className="form-label">Country</label>
                              <select
                                name="form-select"
                                className="modal-form-select"
                              >
                                <option value>Select your Country</option>
                                <option value="India">India</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Sri-lanka">Sri-lanka</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="modal-form-class">
                              <label className="form-label">Class</label>
                              <select
                                name="form-select"
                                className="modal-form-select"
                              >
                                <option value>Select your Class</option>
                                <option value="LKG">LKG</option>
                                <option value="UKG">UKG</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                                <option value="class 6">class 6</option>
                                <option value="class 7">class 7</option>
                                <option value="class 8">class 8</option>
                                <option value="class 9">class 9</option>
                                <option value="class 10">class 10</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="primary" className="new-yellow-btn content-sav-btn" >
                          Submit
                        </Button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  
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
