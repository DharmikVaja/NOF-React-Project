import React, { useEffect, useState } from "react";
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
import Modal from "react-bootstrap/Modal";

const DashUser1Student = (props) => {
  const [studentName, setStudentName] = useState("");
  const [selectedId, setSelectedId] = useState("DO778");  
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSchool, setSelectedSChool] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDOB, setSelectedDOB] = useState("");
  const [studentDetails, setStudentDetails] = useState({
    stu_name: "",
    stu_id: "",
    stu_school: "",
    stu_class: "",
    stu_gender: "",
    stu_dob: "",
  });

  useEffect(() => {
    const storedStudentDetails = localStorage.getItem("studentDetails");
    if (storedStudentDetails) {
      setStudentDetails(JSON.parse(storedStudentDetails));
    }
  }, []);

  useEffect(() => {
    setStudentName(studentDetails.stu_name);
    setSelectedClass(studentDetails.stu_class);
    setSelectedGender(studentDetails.stu_gender);
    setSelectedDOB(studentDetails.stu_dob);
    setSelectedId(studentDetails.stu_id);
    setSelectedSChool(studentDetails.stu_school);
  }, [studentDetails]);

  const [smShow, setSmShow] = useState(false);
  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleDOBChange = (e) => {
    setSelectedDOB(e.target.value);
  };
  const handleIDChange = (e) => {
    setSelectedId(e.target.value);
    localStorage.setItem("studentId:", e.target.value);
  };
  const handleSchoolChange = (e) => {
    setSelectedSChool(e.target.value);
    localStorage.setItem("studentSChool:", e.target.value);
  };
  const handleUpdate = () => {
    setStudentDetails((prevStudentDetails) => ({
      ...prevStudentDetails,
      stu_name: studentName,
      stu_id: selectedId,
      stu_school: selectedSchool,
      stu_class: selectedClass,
      stu_gender: selectedGender,
      stu_dob: selectedDOB,
    }));

    localStorage.setItem(
      "studentDetails",
      JSON.stringify({
        stu_id: selectedId,
        stu_name: studentName,
        stu_class: selectedClass,
        stu_school: selectedSchool,
        stu_gender: selectedGender,
        stu_dob: selectedDOB,
      })
    );
    console.log(studentDetails);
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
                  name="stu_name"
                  type="text "
                  value={studentName}
                  placeholder="Name of the Student"
                  onChange={handleNameChange}
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
                  name="stu_id"
                  type="text "
                  value={selectedId}
                  placeholder="Enter the School Id"
                  onChange={handleIDChange}
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
                  name="stu_school"
                  type="text "
                  onChange={handleSchoolChange}
                  placeholder="Your School Name"
                  value={selectedSchool}
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
                  name="stu_class"
                  value={selectedClass}
                  onChange={handleClassChange}
                >
                  <option>Select your Class</option>
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
                  name="stu_gender"
                  id="exampleFormControlSelect1"
                  type="text "
                  value={selectedGender}
                  onChange={handleGenderChange}
                >
                  <option>Select Gender </option>
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
                <Form.Control
                  type="date"
                  className="dash-input"
                  name="stu_dob"
                  value={selectedDOB}
                  onChange={handleDOBChange}
                />
              </div>
            </div>
          </div>

          <p className="error-msg"></p>
          <div className="d-flex flex-wrap mt-3 gap-2">
            <Link to="/faqs-ticket">
              <button className="common-all-btn">Request Change</button>
            </Link>
            <Link onClick={() => setSmShow(true)}>
              <button className="common-all-btn" onClick={handleUpdate}>
                Update
              </button>
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
