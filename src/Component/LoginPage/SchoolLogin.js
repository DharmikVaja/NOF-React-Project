import React, { useState } from "react";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { handleLoginAPI } from "../../Service/api";
import { useNavigate } from "react-router-dom";

const SchoolLogin = () => {
  const [show, setShow] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async () => {
    try {
      const response = await handleLoginAPI(loginData);

      // Handle successful login, set tokens, redirect, etc.
      console.log("Login successful", response);

      // For example, redirect to a different page on successful login
      navigate("/user-dashboard");
    } catch (error) {
      // Handle login error, show error message, etc.
      console.error("Login error", error);

      // Show error message to the user, display modal, etc.
      handleShow();
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <header className="header-main-login">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-2 mb-md-0">
              <Link to="/">
                <img src={logoImg} alt="LogoImg" className="logoImg" />
              </Link>
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
                  <h2>School Login</h2>
                  <p>Please login to continue</p>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      placeholder="Email"
                      name="email"
                      type="email"
                      className="form-control"
                      defaultValue={loginData.email}
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

                  <p className="error-msg"></p>

                  {/*  */}

                  <Button
                    className="common-btn w-100"
                    variant="primary"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <Link to="/">
                    <Button className="common-btn w-100" variant="primary">
                      Go Back
                    </Button>
                  </Link>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Please Register your school first !!
                    </Modal.Body>

                    <Modal.Footer>
                      <Button
                        variant="primary"
                        className="w-20"
                        onClick={handleClose}
                      >
                        Understood
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*  */}
                  <Link to="/">
                    <button className="common-btn w-100 m-0">Back</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolLogin;
