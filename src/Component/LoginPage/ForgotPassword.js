import React from "react";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <div>
        <header className="header-main-login">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-2 mb-md-0">
                <div>
                  <img src={logoImg} alt="LogoImg" className="logoImg" />
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
                    <h2>Forgot Password</h2>
                    <p>Enter your register email ID to reset your password</p>
                    <div className="mb-3 input-group">
                      <span className="input-group-text">
                      <IoMdMail />
                      </span>
                      <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    
                   
                    <p className="error-msg"></p>
                    <button className="common-btn w-100" >Submit</button>
                    <p>Back to <Link to="/login">login</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;
