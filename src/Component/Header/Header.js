import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png";
import "./header.css";
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaSchool } from "react-icons/fa";
import CountryData from "../../../src/CountryData.json";

const YourComponent = () => {
  // const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const [isToken, setIsToken] = useState(false);
  useEffect(() => {
    setIsToken(localStorage.getItem("token"));
  }, []);

  const handleFormSubmit = () => {
    // Handle form submission logic
    // You can add your logic for form submission here
  };

  return (
    <header className="homeHeader">
      <div className="container">
        <div className="row justify-content-between navbar navbar-expand-lg navbar-light sticky-top">
          <div className="col-md-3 ">
            <span className="navbar-brand" href="/">
              <img src={logoImg} className="logoImg" alt="logo" />
            </span>
          </div>

          <div className="d-flex col-md-6  col-sm-12 justify-content-end  align-items-center gap-2">
            <div className="d-flex justify-content-start m-1">
              <Link role="button" className="cart-wl-btn" to="/wishlist">
                <img src={wishlist} alt="wishlist" className="wl-cart-img" />
                Wishlist
              </Link>

              <div className="position-relative ">
                <Link
                  role="button"
                  className="show-number cart-wl-btn"
                  to="/cart"
                >
                  <div className="show1"> 0</div>
                  <img src={cart} alt="cart" className="wl-cart-img" />
                  Cart
                </Link>
              </div>
            </div>

            <div className="col-md-4 text-end d-flex justify-content-end ">
              {isToken ? (
                <Link to="/user-dashboard">
                  <Button type="button" className="sign-up btn">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Button
                    type="button"
                    className="login-btn "
                    onClick={handleShow2}
                  >
                    Login
                  </Button>
                  <Link to="/signup">
                    <Button
                      type="button"
                      className="sign-up btn"
                      // onClick={handleShow1}
                    >
                      Signup
                    </Button>
                  </Link>
                </>
              )}

              {/* Login modal */}
              <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="login-modal">
                  <Modal.Header
                    closeButton
                    className="login-modal-heading"
                  ></Modal.Header>
                  <Modal.Footer className="login-modal-footer">
                    <div className="login-text">
                      Please select the Login type
                    </div>
                    <div className="login-detail-btns">
                      <div className="student-login-detail">
                        <div className="student-login-image">
                          <HiMiniUserGroup className="fs-1" />
                        </div>
                        <Button variant="primary" className="new-white-btn ">
                          <div>
                            <Link to="login" className="login-link">
                              <h6>Student Login </h6>
                            </Link>
                          </div>
                        </Button>
                      </div>
                      <div className="school-login-detail">
                        <div className="school-login-image">
                          <FaSchool className="fs-1" />
                        </div>
                        <Button variant="primary" className="new-white-btn ">
                          <div>
                            <Link to="school-login" className="login-link">
                              <h6>School Login</h6>
                            </Link>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </Modal.Footer>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid navBar">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            style={{ backgroundColor: "white" }}
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="nav navbarClass">
              <li className="nav-item">
                <Link to="/" className="nav-link listNames">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleShow3} className="nav-link listNames">
                  Product
                </Link>

                <Modal show={show3} onHide={handleClose3}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="reg-modal-text modal-body">
                      <div className="mb-5">
                        <h3>Your Learning, Your Way!</h3>
                        <p>
                          Select Your Region and Class Preference for the
                          Products...
                        </p>
                      </div>

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
                              onChange={(e) =>
                                setSelectedCountry(e.target.value)
                              }
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
                      <Link to="/product">
                        <Button
                          variant="primary"
                          className="new-yellow-btn content-sav-btn"
                          onClick={handleFormSubmit}
                        >
                          Submit
                        </Button>
                      </Link>
                    </div>
                  </Modal.Body>
                </Modal>
              </li>
              <li className="nav-item">
                <Link to="/how-it-works" className="nav-link listNames">
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reports-and-analysis" className="nav-link listNames">
                  Reports & Analysis
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/syllabus" className="nav-link listNames">
                  Syllabus
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/downloads" className="nav-link listNames">
                  Downloads
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link listNames">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default YourComponent;
