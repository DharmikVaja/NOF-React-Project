import React, { useState } from "react";
import "./contentMiddle.css";
import interBGImage from "../../assets/contentMiddle-bgImage.png";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import CountryData from "../../CountryData.json";
import ProImg1 from "../../../src/assets/product/pro1.png";
import ProImg2 from "../../../src/assets/product/pro2.png";
import ProImg3 from "../../../src/assets/product/pro3.png";
import ProImg4 from "../../../src/assets/product/pro4.png";
import ProImg5 from "../../../src/assets/product/pro5.png";
import { Link } from "react-router-dom";

const ContentMiddle = () => {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const backgroundImageStyle = {
    backgroundImage: `url(${interBGImage})`, // Use the interBGImage variable as the background image
  };
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const handleFormSubmit = () => {
    console.log("Selected Country:", selectedCountry);
    console.log("Selected Class:", selectedClass);
  };
  return (
    <div className="international-sec spacer-y" style={backgroundImageStyle}>
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-xl-10 col-lg-12 col-md-12">
            <div className="international-head">
              <h2 className="int-head-h2">NOF International Olympiads</h2>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg5} className="img-fluid" alt="img" />
                  <p>International Junior Hindi Olympiad</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg3} className="img-fluid" alt="img" />
                  <p>International Commerce Olympiad</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg1} className="img-fluid" alt="img" />
                  <p>International Junior Science Olympiad</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg4} className="img-fluid" alt="img" />
                  <p>MTSE-Marathi</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg1} className="img-fluid" alt="img" />
                  <p>International Science Olympiad</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg4} className="img-fluid" alt="img" />
                  <p>MTSE-English</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg5} className="img-fluid" alt="img" />
                  <p>MTSE-Hindi</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg2} className="img-fluid" alt="img" />
                  <p>International Junior English Olympiad</p>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img
                    src={ProImg1}
                    className="img-fluid"
                    alt="img"
                  />
                  <p>International Hindi Olympiad</p>
                </div>
              </div> */}

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="international-box">
                  <img src={ProImg3} className="img-fluid" alt="img" />
                  <p>International Aptitude Olympiad</p>
                </div>
              </div>
            </div>
            <div className="set-top-margin">
              <Link
                className="new-yellow-btn "
                variant="primary"
                to="/signup"
              >
                Click Here to Register
              </Link>
              <Modal show={show1} onHide={handleClose1}>
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
                          <label
                            className="form-label"
                            for="exampleForm.ControlInput1"
                          >
                            Country
                          </label>
                          <select
                            name="country"
                            id="exampleForm.ControlInput1"
                            className="modal-form-select"
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            value={selectedCountry}
                          >
                            <option value="">Select your Country</option>
                            {CountryData.map((country, index) => (
                              <option key={index} value={country.code}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="modal-form-class">
                          <label
                            className="form-label"
                            for="exampleForm.ControlInput1"
                          >
                            Class
                          </label>
                          <select
                            name="form-select"
                            className="modal-form-select"
                            id="exampleForm.ControlInput2"
                            onChange={(e) => setSelectedClass(e.target.value)}
                            value={selectedClass}
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

                    <Button
                      variant="primary"
                      className="new-yellow-btn content-sav-btn"
                      onClick={handleFormSubmit}
                    >
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
  );
};

export default ContentMiddle;
