import React from "react";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png"

const StudentLogin = () => {
  return (
    <div>
      <section className="login-sec-main">
        <div className="p-0 container-fluid">
          <div className="align-items-center row">
            <div className="ms-auto col-lg-4">
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
                      <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                    </span>
                    <input
                      placeholder="Email"
                      name="email"
                      type="email"
                      className="form-control"
                      value=""
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                    <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      id="id_pass"
                      className="form-control"
                      value=""
                    />
                    <span className="input-group-text">
                      <i className="fa fa-eye-slash"></i>
                    </span>
                  </div>
                  <p className="forgot-link">
                    <a href="/forgot-pass">Forgot Password?</a>
                  </p>
                  <p className="error-msg"></p>
                  <button className="common-btn w-100">Login</button>
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

export default StudentLogin;
