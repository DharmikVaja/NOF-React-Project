import React, { useState } from "react";
import UserProfile from "../../../assets/Dashboard/edit-user-dash-profile.png";
import UserProfileEdit from "../../../assets/Dashboard/user-edit-rightbottom.png";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DashUser1Student = () => {
  const [selectedClass, setSelectedClass] = useState("Class 8");
  const [selectedGender, setSelectedGender] = useState("Male");

  const [smShow, setSmShow] = useState(false);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  return (
    <div>
      <ScrollToTop />
      <div className="pad-set">
        <div className="right-image">
          <div id="preview" className="preview-box-new right-image">
            <img src={UserProfile} alt="" />
          </div>
          <div className="edit-image">
            <label htmlFor="uploadFile" className="img-trigger">
              <img src={UserProfileEdit} className="img-fluid" alt="" />
            </label>
            <input type="file" id="uploadFile" />
          </div>
        </div>
        {/*  */}
        <div className="delivery-form pt-5">
          <div className="row">
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaUser className="fs-4" />
                </span>
                <input
                  className="dash-input  form-control ms-1"
                  name="studentname"
                  type="text "
                  value="Hibba"
                  readOnly
                />
              </div>
            </div>
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaAddressCard className="fs-4" />
                </span>
                <input
                  className="dash-input form-control ms-1"
                  name="studentname"
                  type="text "
                  value="DO777"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  {" "}
                  <FaSchool className="fs-4" />
                </span>
                <input
                  className="dash-input form-control ms-1"
                  name="studentname"
                  type="text "
                  value="DPS Monarch International School, Doha, Qatar"
                  readOnly
                />
              </div>
            </div>
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <IoSchool className="fs-4" />
                </span>
                <label htmlFor="exampleFormControlSelect1"></label>
                <select
                  className=" dash-input form-control ms-1"
                  id="exampleFormControlSelect1"
                  type="text "
                  value={selectedClass}
                  onChange={handleClassChange}
                >
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <BsGenderAmbiguous className="fs-4" />
                </span>
                <label htmlFor="exampleFormControlSelect1"></label>
                <select
                  className="dash-input form-control ms-1"
                  id="exampleFormControlSelect1"
                  type="text "
                  value={selectedGender}
                  onChange={handleGenderChange}
                >
                  <option>Male </option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaCalendarAlt className="fs-4" />
                </span>
                <Form.Control type="date" className="dash-input" />
              </div>
            </div>
          </div>

          <p className="error-msg"></p>
          <div className="d-flex mt-3 gap-2">
            <Link to="/faqs-ticket">
              <button className="common-all-btn">Request Change</button>
            </Link>
            <Link onClick={() => setSmShow(true)}>
              <button className="common-all-btn">Update</button>
            </Link>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
                <Modal.Body className="dash-user1-update">
                  Student Details Updated Successfully!!
                </Modal.Body>
              </Modal.Header>
            </Modal>
            <Link to="/account-setting">
              <button className="common-all-btn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUser1Student;
