import React, { useState } from "react";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SchoolLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userData = {
      email: email,
      password: password,
    };

    console.log("User Data:", userData);
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      id="id_pass"
                      className="form-control"
                      defaultValue={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="input-group-text">
                      <FaEyeSlash />
                    </span>
                  </div>
                  <p className="forgot-link">
                    <a href="/forgot-pass">Forgot Password?</a>
                  </p>
                  <p className="error-msg"></p>
                  <button className="common-btn w-100" onClick={handleLogin}>
                    Login
                  </button>
                  <button className="common-btn w-100 m-0">Back</button>
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
