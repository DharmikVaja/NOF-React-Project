import React, { useState, useEffect } from "react";
import { FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import countriesData from "../../Component/Dashboard/UserAccountComp/DashUser2.json";

const Signup = () => {
//   const [countryList, setCountryList] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState("");

//   useEffect(() => {
//     // Fetch country data from the JSON file
//     fetch("../../Component/LoginPage/countries.json") // Replace with the correct path
//       .then((response) => response.json())
//       .then((data) => {
//         setCountryList(data);
//         // Set the initial selected country and phone number (e.g., India)
//         const defaultCountry = data.find((country) => country.code === "IN");
//         setSelectedCountry(defaultCountry);
//         setPhoneNumber(defaultCountry.dial_code);}).catch((error) => console.error("Error fetching country data:", error));
//   }, []);

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setPhoneNumber(country.dial_code);
//   };
const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
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
                      name="user_name"
                      type="text"
                      className="form-control"
                      defaultValue=""
                    />
                  </div>
                  {/*  */}
                  
                  <div className="mb-2 input-group">
                  <select
                  aria-label="Default select example"
                  name="countryCode"
                  className="form-select"
                  onChange={handleCountryChange}
                  value={selectedCountry}
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
                  defaultValue={97430087421}
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
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      name="password"
                      placeholder="Password"
                      type="password"
                      id="id_pass"
                      className="form-control"
                      defaultValue=""
                    />
                    <span className="input-group-text">
                      <FaEyeSlash />
                    </span>
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      name="confirm_password"
                      placeholder="Confirm Password"
                      type="password"
                      id="id_pass1"
                      className="form-control"
                      defaultValue=""
                    />
                    <span className="input-group-text">
                      <FaEyeSlash />
                    </span>
                  </div>
                  <p className="error-msg" />
                  <p className="success-msg" />
                  <p className="error-msg" />
                  <button className="common-btn w-100">Next</button>
                  <p>
                    <small>
                      Already have account?{" "}
                      <Link to="/student-login">Login here</Link>
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
