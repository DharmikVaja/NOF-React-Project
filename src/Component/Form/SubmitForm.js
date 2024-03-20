import React, { useEffect, useState } from "react";
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
import { handleSubmitAPI } from "../../Service/api";
import "intl-tel-input/build/css/intlTelInput.css"; // Import CSS
import intlTelInput from "intl-tel-input";

const SubmitForm = () => {
  const [validated, setValidated] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    countryCode: "+91",
    email: "",
    comment: "",
  });

  useEffect(() => {
    const input = document.querySelector("#mobile_code");
    intlTelInput(input, {
      initialCountry: "IN",
      separateDialCode: true,
    });

    input.addEventListener("countrychange", handlePhoneChange);

    return () => {
      input.removeEventListener("countrychange", handlePhoneChange);
    };
  }, []);

  const handlePhoneChange = (event) => {
    const input = event.currentTarget;
    setPhoneNum(input.value);
  };

  const handleForm = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("-------")
      e.stopPropagation();
    }

    setValidated(true);
    try {
      const response = await handleSubmitAPI(formData);
      console.log("Review sent successfully", response);
  
      localStorage.setItem("SubmitFormData", JSON.stringify(formData));
      console.log(formData);
    } catch (error) {
      console.error("Something went wrong", error.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
                onSubmit={handleForm}
                className="get-touch-bg"
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
                  <Form.Group
                    className="form-group d-flex flex-column"
                    as={Col}
                    md="10"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text" // Change type to "tel" for phone number input
                      id="mobile_code"
                      className="form-control"
                      placeholder="Phone Number"
                      defaultValue={phoneNum}
                      required
                    />
                    {/* <Form.Control.Feedback type="invalid">
                      Please enter a valid phone number.
                    </Form.Control.Feedback> */}
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
