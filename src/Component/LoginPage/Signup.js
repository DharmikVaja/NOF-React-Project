import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import countriesData from "../../Component/Dashboard/UserAccountComp/DashUser2.json";
import { handleSignupAPI } from "../../Service/api";
// import { Modal } from "react-bootstrap";

const Signup = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [otpModalOpen, setOtpModalOpen] = useState(false);

  const navigate = useNavigate;

  const [userData, setUserData] = useState({
    studentName: "",
    email: "",
    phoneNumber: "",
    password: "",
    countryCode: "IN",
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const response = await handleSignupAPI("signup", null, userData);

      console.log("res::", response);

      if (response.status === true) {
        console.log("Signup successful");
        navigate("/login");
      }
    } catch (error) {
      console.log("Signup failed. Please fix the errors."); 
    }

    // if (
    //   validatestudentName() &&
    //   validatePhoneNumber() &&
    //   validateEmail() &&
    //   validatePassword()
    // ) {
    //   // Perform signup logic here
    //   console.log("Signup successful");
    //   navigate("/login")
    // } else {
    //   console.log("Signup failed. Please fix the errors.");
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // const validatestudentName = () => {
  //   if (!userData.studentName || userData.studentName.trim() === "") {
  //     setErrors({
  //       studentName: "Username cannot be empty",
  //       phoneNumber: errors.phoneNumber,
  //       email: errors.email,
  //       password: errors.password,
  //     });
  //     return false;
  //   } else {
  //     setErrors({
  //       ...errors,
  //       studentName: "",
  //     });
  //     return true;
  //   }
  // };

  // const validatePhoneNumber = () => {
  //   if (!userData.phoneNumber || userData.phoneNumber.length !== 10) {
  //     setErrors({
  //       ...errors,
  //       phoneNumber: "Mobile number should be 10 digits.",
  //     });
  //     return false;
  //   }
  //   setErrors({
  //     ...errors,
  //     phoneNumber: "",
  //   });
  //   return true;
  // };
  // const validatePassword = () => {
  //   if (userData.password.length < 8) {
  //     setErrors({
  //       ...errors,
  //       password: "Password should contains atleast 8 digits",
  //     });
  //   }
  //   return true;
  // };
  // const validateEmail = () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!userData.email || !emailRegex.test(userData.email)) {
  //     setErrors({
  //       ...errors,
  //       email: "Please enter a valid email.",
  //     });
  //     return false;
  //   }
  //   setErrors({
  //     ...errors,
  //     email: "",
  //   });
  //   return true;
  // };
 
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
                      // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
                  {/* <p className="error-msg" /> */}
                  <button className="common-btn w-100" onClick={handleSignup}>
                    Next
                  </button>

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
