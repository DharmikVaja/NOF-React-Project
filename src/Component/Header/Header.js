import React, { useEffect, useRef, useState } from "react";
import logoImg from "../../assets/logo.png";
import "./header.css";
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaSchool } from "react-icons/fa";
import CountryData from "../../../src/CountryData.json";
import MenuBtn from "../../assets/Dashboard/menu-icon-dashboard-up.png";

const Header = (props) => {
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);

  const [isToken, setIsToken] = useState(false);
  useEffect(() => {
    setIsToken(localStorage.getItem("token"));
  }, []);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const handleFormSubmit = () => {
    if (selectedCountry && selectedClass) {
      localStorage.setItem("selectedCountry:", selectedCountry);
      localStorage.setItem("selectedClass:", selectedClass);
      navigate("/product");
    } else {
      alert("please select a country and class to continue!");
    }
  };
  const navigate = useNavigate();
  const handleShow3 = () => {
    setShow3(true);
  };

  const targetRef = useRef(null);
  const scrollToCart = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="homeHeader ">
      <div className="container">
        <div className="row justify-content-between navbar navbar-expand-lg navbar-light sticky-top">
          <div className="col-md-3 ">
            <span className="navbar-brand" href="/">
              <img src={logoImg} className="logoImg" alt="logo" />
            </span>
          </div>

          <div className="d-flex col-md-8  col-sm-12 justify-content-end header-list align-items-center ">
            <div className="d-flex wl-ct justify-content-start gap-2 m-1">
              <Link role="button" className="cart-wl-btn" to="/wishlist">
                <img src={wishlist} alt="wishlist" className="wl-cart-img" />
                <div className="text-center "> Wishlist</div>
              </Link>

              <Link
                role="button"
                // onClick={() => props.handleShow(true)}
                onClick={scrollToCart}
                className="show-number cart-wl-btn position-relative "
                to="/product"
                
              >
                {/* <span className="show1"> {props.count || 0} </span> */}
                <img src={cart} alt="cart" className="wl-cart-img" />
                <div className="text-start ">Cart</div>
              </Link>
            </div>

            <div className="col-md-4 text-end d-flex justify-content-end gap-2">
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

              {/*  */}
              <button
                className="navbar-toggler"
                type="button"
                // style={{ backgroundColor: "white" }}
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img src={MenuBtn} alt="" />
              </button>

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
            {/*  */}

            {/*  */}
          </div>
        </div>
      </div>

      <div className="container-fluid navBar">
        <nav className="navbar navbar-expand-lg">
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
                <Link
                  className="nav-link listNames"
                  // onClick={() => props.handleShow(false)}
                  to="/product"
                >
                  Buy Product
                </Link>

                <Modal show={show3} onHide={handleClose3}>
                  cart
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
                              id="exampleForm.ControlInput1"
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

export default Header;
