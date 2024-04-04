import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import countriesData from "../../Component/Dashboard/UserAccountComp/DashUser2.json";
import { handleSignupAPI } from "../../Service/api";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    studentName: "",
    countryCode: "+91",
    phoneNumber: "",
    email: "",
    password: "",
    emailOtp: "",
    phoneOtp: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignup = async () => {
    const phoneNumber = userData.phoneNumber.replace(/\D/g, "");
    const isValidPhoneNumber = /^[6-9]\d{9}$/.test(phoneNumber);
    if (!isValidPhoneNumber) {
      toast.error(
        "Please enter a valid 10-digit phone number, starting with 6, 7, 8, or 9"
      );
      return;
    }
    try {
      const response = await handleSignupAPI(userData);
      // console.log("Response", response);
      if (response.data.status !== true) {
        console.error("Signup failed:", response && response.data.message);
        toast.error(
          "Something went wrong! Please check all the details properly and try again. "
        );
      } else {
        console.log("Verify otp to proceed signup process");
        localStorage.setItem("token", response.data.data.token);
        // await handleOtpVerification();
        localStorage.setItem("phoneNumber:", userData.phoneNumber);
        localStorage.setItem("countryCode:", userData.countryCode);
        // console.log(userData.countryCode);
        localStorage.setItem("email:", userData.email);
        // toast.success("Signup successfully, please Login to proceed");
        handleShow();
        setTimeout(() => {
          navigate("/verify-otp");
        }, 1500);

        return;
      }
    } catch (error) {
      console.error("Error message:", error);
      toast.error(
        "Signup failed! Please check all the details properly and try again"
      );
    }
  };

  const [toastMessage, setToastMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const handlePhone = (e) => {
    const { name, value } = e.target;

    // Phone number validation
    if (name === "phoneNumber") {
      // Allow only digits
      const phoneNumber = value.replace(/\D/g, "");

      // Allow only 10-digit numbers starting with 6, 7, 8, or 9
      const isValidPhoneNumber = /^[6-9]\d{9}$/.test(phoneNumber);

      if (isValidPhoneNumber || phoneNumber === "") {
        setUserData((prevData) => ({
          ...prevData,
          [name]: phoneNumber,
        }));
      }
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleToastClose = () => {
    setToastMessage("");
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
                  <img src={logoImg} alt="LogoImg" className="logoImg"></img>
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
                    />
                  </div>
                  {/*  */}
                  <div className="mb-2 input-group">
                    <select
                      aria-label="Default select example"
                      name="countryCode"
                      className="form-select"
                      value={userData.countryCode}
                      onChange={handleChange}
                    >
                      {countriesData.map((country, index) => (
                        <option
                          key={index}
                          value={country.dial_code}
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
                      defaultValue={userData.phoneNumber}
                      onChange={handleChange && handlePhone}
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

                  <p className="error-msg">
                    {errors.studentName ||
                      errors.phoneNumber ||
                      errors.email ||
                      errors.password}
                  </p>
                  <p className="success-msg" />

                  <Button className="common-btn w-100" onClick={handleSignup}>
                    Signup
                  </Button>
                  {/*  */}
                  <Modal
                    show={show}
                    onHide={handleClose}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    className=""
                    centered
                  >
                    <div className="row modal_success">
                      <div className="col-12 d-flex justify-content-end">
                        <AiOutlineCloseCircle
                          onClick={handleClose}
                          className="fs-5 cursorPointerClass"
                          style={{ color: "#00000080" }}
                        />
                      </div>
                      <div className="fs-2 d-flex justify-content-center py-4 pb-5">
                        Signup Successful
                      </div>
                    </div>
                  </Modal>
                  {/*  */}
                  <Toast
                    show={!!toastMessage}
                    onClose={handleToastClose}
                    delay={5000}
                    autohide
                  >
                    <Toast.Header>
                      <strong className="me-auto ">Validation Error</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                  </Toast>

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
