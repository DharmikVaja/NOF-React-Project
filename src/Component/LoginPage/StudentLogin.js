import React, { useEffect, useState } from "react";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handleLoginAPI } from "../../Service/api";
import Button from "react-bootstrap/Button";
import { Toast } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const SchoolLogin = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const [showToast, setShowToast] = useState(false);
  // const toggleShowA = () => setShowToast(!showToast);
  const handleLogin = async () => {
    try {
      const response = await handleLoginAPI({ email, password });
      if (response.status) {
        // console.log("Login successful");
        alert("Login Successful")
        toast.success("Login Successful");
        navigate("/user-dashboard");
      } else {
        console.error("Login failed:", response.message);
        setErrorMessage(
          "Login failed. Please check your credentials and try again."
        );
        toast.error("Login failed. Please check your credentials and try again.")
      }
    } catch (error) {
      console.error("Error during login:", error.response?.data.message);
      setErrorMessage(
        "Login failed. Please check your credentials and try again."
        );
        toast.error("Login failed. Please check your credentials and try again.")
    }
  };

  // console.log("hello", userData);
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
                  <h2>Student Login</h2>
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
                      defaultValue={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      placeholder="Password"
                      name="password"
                      type={showPassword ? "password" : "text"}
                      id="id_pass"
                      className="form-control"
                      defaultValue={password}
                      onChange={handleChange}
                    />
                    <span
                      className="input-group-text"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <p className="forgot-link">
                    <a href="/forgot-pass">Forgot Password?</a>
                  </p>
                  <p className="error-msg"></p>

                  <Button onClick={handleLogin} className="common-btn w-100">
                    Login
                  </Button>

                  <Toast
                    show={!!errorMessage}
                    onClose={() => setErrorMessage("")}
                    delay={5000}
                    autohide
                    bg="danger"
                    text="white"
                    style={{ position: "absolute", top: 10, right: 10 }}
                  >
                    <Toast.Header>
                      <strong className="me-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>{errorMessage}</Toast.Body>
                  </Toast>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default SchoolLogin;
