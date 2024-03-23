import React, { useEffect, useRef, useState } from "react";
import "../../app.css";
import "./submitForm.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "react-phone-number-input/style.css";
import "intl-tel-input/build/css/intlTelInput.css";
// import intlTelInput from "intl-tel-input";
import { handleSubmitAPI } from "../../Service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    countryCode: "",
    phone: "",
    email: "",
    comment: "",
  });

  const phoneInputRef = useRef(null);

  const handleKeyPress = (event) => {
    // Allow backspace (keyCode 8) and delete (keyCode 46)
    if (event.keyCode === 8 || event.keyCode === 46) {
      return;
    }

    // Allow only digits (keyCode 48 to 57)
    if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
      event.preventDefault();
    }
  };
  const handleCountryCode = (e) => {
    const { name, value } = e.target;

    if (value === "+" || value === "") {
      setFormData({
        ...formData,
        [name]: "+",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  //
  const handleForm = async (e) => {
    e.preventDefault();
    console.log("---------");
    try {
      const response = await handleSubmitAPI(formData);
      if (response) {
        setValidated(true);
        console.log(formData);
        localStorage.setItem("FormData", JSON.stringify(formData));
        toast.success("Your review is submitted successfully")
      } else {
        toast.error(
          "Something went wrong! Please fill in all mandatory fields & try again" ||
            response.message
        );
      }
    } catch (error) {
      toast.error(
        "Please fill in all mandatory fields & try again" || error.message
      );
    }
  };

  return (
    <>
      <footer className="footer-home-new" id="footer">
        <ToastContainer />
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
                onSubmit={handleForm}
                className="get-touch-bg"
              >
                <h2 className="">Get in touch with us...</h2>
                <Row className="mb-3 ">
                  <Form.Group as={Col} md="6" controlid="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter First name"
                      // defaultValue=""
                      value={formData.first_name}
                      onChange={handleChange}
                      name="first_name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlid="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Last name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  {/* <div className="d-flex flex-column"> */}
                  <Form.Group
                    className="form-group d-flex flex-column"
                    as={Col}
                    md="10"
                  >
                    <Form.Label className="col-12">Phone Number</Form.Label>
                    {/* <InputGroup hasValidation> */}
                    <Form.Control
                      required
                      type="tel"
                      name="countryCode"
                      value={formData.countryCode}
                      id="ppf"
                      maxLength="8"
                      size="4"
                      onChange={handleCountryCode}
                      className="country-code form-control col-md-3"
                      placeholder="+91"
                    />
                    {/* </InputGroup> */}
                    <InputGroup hasValidation>
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        // separateDialCode={true}
                        value={formData.phone}
                        onChange={handleChange}
                        // id="mobile_code"
                        ref={phoneInputRef}
                        onKeyDown={handleKeyPress}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* </div> */}
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlid="validationCustomUsername"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  {/* <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  /> */}
                </Form.Group>
                <Button type="submit" className="form-submit-btn">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SubmitForm;
