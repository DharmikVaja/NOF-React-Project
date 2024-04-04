import React, { useState } from "react";
import { Button, Modal, ModalHeader } from "react-bootstrap";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => setSmShow(false);

  const navigate = useNavigate();
  const handleAdminLog = () => {
    const adminEmail = "nof123@gmail.com";
    const adminPassword = "admin123";
    if (email === adminEmail && password === adminPassword) {
      alert("Successfully Login");
      navigate("/admin-panel");
    } else {
      setSmShow(true);
      setError("Invalid Credentials");
    }
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
                      type={showPassword ? "text" : "password"}
                      id="id_pass"
                      className="form-control"
                      defaultValue={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    // onClick={() => setSmShow(true)}
                    onClick={handleAdminLog}
                  >
                    Login
                  </Button>

                  <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                    style={{ border: "0" }}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Please Create an Account first !!
                      <Button
                        className="common-btn "
                        style={{
                          display: "flex",
                          marginLeft: "auto",
                        }}
                        onClick={handleClose}
                      >
                        Understood
                      </Button>
                    </Modal.Body>
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

export default Admin;
