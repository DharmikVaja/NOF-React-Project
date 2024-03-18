import React, { useState } from "react";
import "../../app.css";
import "./submitForm.css";
import { FaBorderNone, FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Form, FormControl, InputGroup } from "react-bootstrap";
// import CountryFlag from "./flag&countrycode.json";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const SubmitForm = () => {
  const [validated, setValidated] = useState(false);

  const [phoneNum, setPhoneNum] = useState("");
  // const [validNum, setValidNum] = useState(true);w

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (
      form.checkValidity() === false ||
      !validatePhoneNum(phoneNum, formData.phone)
    ) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handlePhone = (value, country, event, formattedValue) => {
    setPhoneNum(value);
  };

  const validatePhoneNum = (phoneNum, country) => {
    const phoneNumPatterns = {
      US: /^\d{10}$/,
      IN: /^\d{10}$/,
    };

    return phoneNumPatterns[country].test(phoneNum);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "+91",
    email: "",
    comment: "",
  });

  return (
    <>
      <footer className="footer-home-new" id="footer">
        <div className="container">
          <div className="row align-items-center d-flex justify-content-between ">
            <div className="offset-md-1 col-md-5 col-lg-3">
              <div className="get-touch-info ">
                <h2 className="nof-get-info-heading">
                  National Olympiad Foundation
                </h2>
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
            <div className="col-md-12 col-lg-7">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                // validated={validated}
                // onSubmit={handleSubmit}
                className="get-touch-bg "
              >
                <h2>Get in touch with us...</h2>
                <Row className="mb-3 ">
                  <Form.Group as={Col} md="6" controlid="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter First name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlid="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Last name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlid="validationCustomUsername"
                  ></Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlid="validationCustom03">
                    <Form.Label>Phone Number</Form.Label>
                    <PhoneInput
                      style={{ "::placeholder": { border: "none" } }}
                      className="form-phone-field"
                      value={phoneNum}
                      defaultCountry="IN"
                      onChange={handlePhone}
                      placeholder="Enter Phone Number"
                      pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
                      as={Col}
                      md="2"
                      controlid="validationCustom06"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlid="validationCustomUsername"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <InputGroup hasValidation>
                      {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                      <Form.Control
                        type="text"
                        placeholder="Email Address"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter valid Email Address
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlid="validationCustom">
                    <Form.Label>Comments</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        type="Comments"
                        placeholder="Write something you want to ask.."
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit" className="form-submit-btn">Submit form</Button>
              </Form>
            </div>
            {/*  */}
            {/* <div className=" needs-validation ">
              <div className="get-touch-bg">
                <h2>Get in touch with us...</h2>
                <div>
                  <form 
                  >
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
                     
                      <input
                        className="form-control"
                        placeholder="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                      />
                      <div className="flag-dropdown">
                        <div
                          className={`selected-flag open ${formData}`}
                          tabIndex="0"
                          role="button"
                          aria-haspopup="listbox"
                        >
                          <div className={`flag ${formData}`}>
                            <div className="arrow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="error-msg">{formErrors.phone}</p>

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
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default SubmitForm;
