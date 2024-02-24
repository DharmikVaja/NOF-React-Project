import React, { useState } from "react";
import "../../app.css";
import "./submitForm.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "+91",
    email: "",
    comment: "",
  });

  const [formErrors, setFormErrors] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the specific error when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate First Name
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First Name is required";
      valid = false;
    }

    // Validate Last Name
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last Name is required";
      valid = false;
    }

    // Validate Phone Number
    const phoneRegex = /^\+91[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone Number must be +91 followed by 10 digits";
      valid = false;
    }

    // Validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid Email Address";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform your submit logic here
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <>
      <footer className="footer-home-new" id="footer">
      <div className="container">
        <div className="row align-items-center d-flex justify-content-between">
          <div className="offset-md-1 col-md-5 col-lg-3">
            <div className="get-touch-info ">
                <h2>National Olympiad Foundation</h2>
                <p>
                  NOF Edtech Private Limited G-1, 108, Saket Nagar Indore,
                  452018 ,Madhya Pradesh
                </p>
                <p>Helpline :</p>
                <p>junior@groupnof.com</p>
                <p>+91 93011 95542</p>
                <ul className="social-icons d-flex">
                  <li>
                    <a
                      href="https://www.facebook.com/NOF-Junior-105382224526859/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/nofolympiad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nofjunior/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCoVgu8YEtOEDZRnHoebokEA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.pinterest.com/5855264130ae1e564c13d784250868/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-7">
            <div className="get-touch-bg">
                <h2>Get in touch with us...</h2>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">First Name</label>
                          <input
                            placeholder="Enter First Name"
                            name="first_name"
                            type="text"
                            className="form-control"
                            value={formData.first_name}
                            onChange={handleChange}
                          />
                          <p className="error-msg">{formErrors.first_name}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">Last Name</label>
                          <input
                            placeholder="Enter Last Name"
                            name="last_name"
                            type="text"
                            className="form-control"
                            value={formData.last_name}
                            onChange={handleChange}
                          />
                          <p className="error-msg">{formErrors.last_name}</p>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <div className="react-tel-input flag-phone">
                        <input
                          className="form-control"
                          placeholder="Phone Number"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <div className="flag-dropdown">
                          <div
                            className="selected-flag open"
                            title="India: +91"
                            tabIndex="0"
                            role="button"
                            aria-haspopup="listbox"
                          >
                            <div className="flag in">
                              <div className="arrow"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="error-msg">{formErrors.phone}</p>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        placeholder="Enter Email Address"
                        name="email"
                        type="email"
                        className="form-control submitform-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <p className="error-msg">{formErrors.email}</p>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Comments</label>
                      <textarea
                        rows="4"
                        placeholder="Write something you want to ask.."
                        name="comment"
                        className="form-control"
                        value={formData.comment}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <p className="error-msg"></p>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SubmitForm;
