import React, { useState } from "react";
import { Button, Modal, ModalHeader } from "react-bootstrap";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { handleAdminAPI } from "../../Service/api";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleAdminLog = async () => {
    const adminEmail = "nof123@gmail.com";
    const adminPassword = "admin123";
    try {
      console.log("------------------");
      const response = await handleAdminAPI({ email, password });
      if (email === adminEmail && password === adminPassword) {
        alert("Successfully Login");
        navigate("/admin-panel");
      } else {
        setError("Invalid Credentials");
      }
      console.log(response);
    } catch (error) {
      console.log("error", error || "Error while login, please try again");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    console.log(name, value);
  };

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
                  <h2>Admin Login</h2>
                  {/* <p>Please login to continue</p> */}
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      placeholder="Email"
                      name="email"
                      type="email"
                      className="form-control"
                      value={email}
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
                      value={password}
                      onChange={handleChange}
                    />
                    <span
                      className="input-group-text"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <p className="error-msg"></p>
                  <Button
                    className="common-btn w-100"
                    variant="primary"
                    // onClick={() => setSmShow(true)}
                    onClick={handleAdminLog}
                  >
                    Login
                  </Button>

                  <Link to="/">
                    <button className="common-btn w-100 m-0">Go Back</button>
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

export default Admin;
