import React, { useEffect, useState } from "react";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { handleLoginAPI } from "../../Service/api";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleLogin = async () => {
    try {
      const response = await handleLoginAPI({ email, password });
      console.log(response);
      if (response.status) {
        localStorage.setItem("token", response.userData.token);
        console.log("login success");
        alert("login successfully");
        toast.success("Login Successfully");
        navigate("/user-dashboard");

        localStorage.setItem("userEmail:", email);
        localStorage.setItem("userPassword:", password);
        console.log("userEmail:");
        console.log("userPassword:");
      } else {
        console.error("Login failed:", response.message);
        toast.error(
          "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      console.error("Error during login:", error.response?.data.message);
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <header className="header-main-login">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-2 mb-md-0">
              <div>
                <Link to="/">
                  <img src={logoImg} alt="LogoImg" className="logoImg" />
                </Link>
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
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <p className="forgot-link">
                    <Link to="/forgot-psd">Forgot Password?</Link>
                  </p>
                  <p className="error-msg"></p>

                  <Button onClick={handleLogin} className="common-btn w-100">
                    Login
                  </Button>
                  <p className="forgot-link">
                    <Link to="/signup">Dont have account? Signup</Link>
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

export default StudentLogin;
