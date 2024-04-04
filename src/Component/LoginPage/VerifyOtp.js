import React, { useState } from "react";
import "./login-page.css";
import LoginBGImg from "../../assets/login-after-btn-bg.png";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { handleOtpVerificationAPI } from "../../Service/api";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";

const VerifyOtp = ({ userData }) => {
  const DialCode = localStorage.getItem("countryCode:");
  const PhoneNumber = localStorage.getItem("phoneNumber:");
  const Email = localStorage.getItem("email:");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    // Check if the entered value is a number and update the OTP state accordingly
    if (!isNaN(value) && value !== "" && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if available
      if (index < otp.length - 1 && value !== "") {
        const nextInput = event.target.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else if (value === "") {
      // If the value is empty, clear the corresponding OTP value and move focus to the previous input field
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      const previousInput = event.target.previousElementSibling;
      if (previousInput) {
        previousInput.focus();
      }
    }
  };
  const handleBackspace = (index, event) => {
    if (event.keyCode === 8 && index > 0 && otp[index] === "") {
      const previousInput = event.target.previousElementSibling;
      if (previousInput) {
        previousInput.focus();
      }
    }
  };
  const handleOTP = async () => {
    const _finalKey = otp.join("");
    console.log(_finalKey);

    const { email, phoneNumber, countryCode } = userData;
    try {
      const otpFromAPI = await handleOtpVerificationAPI(
        email,
        phoneNumber,
        countryCode
      );

      // Compare the OTP entered by the user with the OTP from the API
      if (_finalKey === otpFromAPI) {
        console.log("OTP verification successful");
        // Redirect or perform further actions upon successful OTP verification
      } else {
        toast.error("Incorrect OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Error verifying OTP. Please try again.");
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
              <div className="login-side-box d-flex flex-column">
                <div className="inner-box-login">
                  <h2 className="pb-2">Verify Mobile Number</h2>
                  <p>
                    We have sent the OTP to {DialCode} {PhoneNumber}
                  </p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-row gap-2">
                      {otp.map((value, index) => (
                        <input
                          key={index}
                          type="number"
                          className={`otp_inputs otp__digit otp__field__${
                            index + 1
                          }`}
                          value={value}
                          onChange={(e) => handleInputChange(index, e)}
                          onKeyDown={(e) => handleBackspace(index, e)}
                          // Set tabIndex to 0 to allow focusing with the keyboard
                          tabIndex={0}
                        />
                      ))}
                    </div>

                    <Button
                      className="common-btn w-25 rounded-3 py-2"
                      onClick={handleOTP}
                    >
                      Verify
                    </Button>
                  </div>
                  <hr />
                </div>
                {/* <div className="inner-box-login">
                  <h2 className="pb-2">Verify Email</h2>
                  <p>We have sent the OTP to {Email}</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-row gap-2">
                      {otp.map((value, index) => (
                        <input
                          key={index}
                          type="number"
                          className={`otp_inputs otp__digit otp__field__${
                            index + 1
                          }`}
                          value={value}
                          onChange={(e) => handleInputChange(index, e)}
                          onKeyDown={(e) => handleBackspace(index, e)}
                          // Set tabIndex to 0 to allow focusing with the keyboard
                          tabIndex={0}
                        />
                      ))}
                    </div>

                    <Button
                      className="common-btn w-25 rounded-3 py-2"
                      onClick={handleOTP}
                    >
                      Verify
                    </Button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyOtp;
