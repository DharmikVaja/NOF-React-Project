import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import "./header.css";
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaSchool } from "react-icons/fa";

const Header = () => {
  // Signup
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  // Login
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <>
      <div className="homeHeader ">
        <div className="container ">
          <div className="row">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom sticky-top">
              <div className="col-md-3 mb-2 mb-md-0">
                <span className="navbar-brand" href="/">
                  <img src={logoImg} className="logoImg" alt="logo" />
                </span>
              </div>

              <div className="col-md-7 d-flex justify-content-end align-items-center">
                <div className="me-3">
                  <Link role="button" className="cart-wl-btn" to="/wishlist">
                    <img
                      src={wishlist}
                      alt="wishlist"
                      className="wl-cart-img"
                    />
                    Wishlist
                  </Link>
                </div>
                <div className="position-relative me-3">
                  <Link
                    role="button"
                    className="show-number cart-wl-btn"
                    to="/cart"
                  >
                    <div class="show1"> 0</div>
                    <img src={cart} alt="cart" className="wl-cart-img" />
                    View Cart
                  </Link>
                </div>
              </div>

              <div className="col-md-2 text-md-end  d-md-flex">
                <Button
                  type="button"
                  className="login-btn"
                  onClick={handleShow2}
                >
                  Login
                </Button>
                <Button
                  type="button"
                  className="sign-up btn"
                  onClick={handleShow1}
                >
                  Signup
                </Button>

                {/* Login */}
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
                            <HiMiniUserGroup />
                          </div>
                          <Button variant="primary" className="new-white-btn ">
                            <div>
                              <Link to="student-login" className="login-links">
                                <h5>Student Login </h5>
                              </Link>
                            </div>
                          </Button>
                        </div>

                        <div className="school-login-detail">
                          <div className="school-login-image">
                            <FaSchool />
                          </div>
                          <Button variant="primary" className="new-white-btn ">
                            <div>
                              <Link to="school-login" className="login-links">
                                <h5>School Login</h5>
                              </Link>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </Modal.Footer>
                  </div>
                </Modal>

                {/* Signup */}

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
                      <Button
                        variant="primary"
                        className="new-yellow-btn content-sav-btn"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </header>
          </div>
        </div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg ">
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
                <li className="nav-item ">
                  <Link to="/" className="nav-link listNames">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/how-it-works" className="nav-link listNames">
                    How it works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/reports-and-analysis"
                    className="nav-link listNames"
                  >
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
      </div>
    </>
  );
};

export default Header;
