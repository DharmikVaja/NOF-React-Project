import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import countriesData from "../../Component/Dashboard/UserAccountComp/DashUser2.json";
import { handleAPI } from "../../Service/api";
import { Modal } from "react-bootstrap";
// import { Modal } from "react-bootstrap";

const Signup = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);

  const [userData, setUserData] = useState({
    studentName: "",
    email: "",
    phoneNumber: "",
    password: "",
    countryCode: "+91",
  });

  const handleSignup = async () => {
    await handleAPI("signup", null, userData)
      .then((res) => {
        console.log("res::", res);
        if (res.status === true) {
          setOtpModalOpen(true);
        }
      })

      .catch((error) => {
        console.log("error::", error);
      });
  };
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const closeModal = () => {
    setOtpModalOpen(false);
  };

  //   const [smShow, setSmShow] = useState(false);
  return (
    <div>
      <header className="header-main-login">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-2 mb-md-0">
              <div>
                <img src={logoImg} alt="LogoImg" className="logoImg"></img>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="login-sec-main">
        <div className="p-0 container-fluid">
          <div className="align-items-center row">
            <div className="ms-auto col-lg-4 ">
              <div>
                <img
                  src={LoginBGImg}
                  alt="Login"
                  className="img-fluid img-login-side"
                />
              </div>
            </div>
            <div className="ms-auto col-lg-6">
              <div className="login-side-box">
                <div className="inner-box-login">
                  <h2>Sign Up</h2>
                  <p>
                    Unlock Your Academic Potential, Sign up for the Ultimate
                    Exam Experience!
                  </p>
                  <div className="mb-2 input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      placeholder="Student Name"
                      name="studentName"
                      type="text"
                      className="form-control"
                      value={userData.studentName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/*  */}

                  <div className="mb-2 input-group">
                    <select
                      aria-label="Default select example"
                      name="countryCode"
                      className="form-select"
                      value={selectedCountry || "IN"}
                      onChange={handleChange}
                    >
                      {countriesData.map((country, index) => (
                        <option
                          key={index}
                          value={country.code}
                          data-phonecode={country.dial_code}
                        >
                          {country.name} ({country.dial_code})
                        </option>
                      ))}
                    </select>
                    <input
                      name="phoneNumber"
                      placeholder="Phone Number"
                      type="number"
                      readOnly=""
                      className="form-control"
                      value={userData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  {/*  */}
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <MdEmail />{" "}
                    </span>
                    <input
                      placeholder="Email"
                      name="email"
                      type="email"
                      className="form-control"
                      defaultValue=""
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      name="password"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      id="id_pass"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      className="form-control"
                      defaultValue=""
                      onChange={handleChange}
                    />
                    <span
                      className="input-group-text"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  {/* <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      name="confirm_password"
                      placeholder="Confirm Password"
                      type={showPassword1 ? "text" : "password"}
                      id="id_pass1"
                      className="form-control"
                      defaultValue=""
                    />
                    <span
                      className="input-group-text"
                      onClick={() => setShowPassword1(!showPassword1)}
                    >
                      {showPassword1 ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div> */}
                  <p className="error-msg" />
                  <p className="success-msg" />
                  <p className="error-msg" />
                  <button className="common-btn w-100" onClick={handleSignup}>
                    Next
                  </button>
                  <Modal show={otpModalOpen} onHide={closeModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Enter 6-digit OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input type="text" maxLength="6" />
                      {/* Additional OTP modal content and actions */}
                    </Modal.Body>
                  </Modal>
                  <p>
                    <small>
                      Already have account? <Link to="/login">Login here</Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
