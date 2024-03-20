import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
// import Form from "react-bootstrap/Form";
import { FaAddressCard, FaCalendarAlt, FaSchool, FaUser } from "react-icons/fa";
import { IoMaleFemale } from "react-icons/io5";
import { Link } from "react-router-dom";
import SchoolList from "./SchoolList";

const AddStudent = () => {
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          <div className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set register-border">
                  <div className="head-for-all-page">
                    <div>
                      <h3>ADD NEW STUDENT</h3>
                      <p>You can add new student Here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="delivery-form mt-4 p-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaAddressCard />
                    </span>
                    <SchoolList/>
                    {/*  */}
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaSchool />
                    </span>
                    <input
                      placeholder="School Name"
                      name="schoolName"
                      type="text"
                      className="form-control"
                      defaultValue=""
                      disabled=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <PiChalkboardTeacherDuotone />
                    </span>
                    <select
                      name="studentClass"
                      className="form-select"
                      id="country-state"
                    >
                      <option value="">Class</option>
                      <option value="PRE-NURSERY">PRE-NURSERY</option>
                      <option value="NURSERY">NURSERY</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="CLASS 1">CLASS 1</option>
                      <option value="CLASS 2">CLASS 2</option>
                      <option value="CLASS 3">CLASS 3</option>
                      <option value="CLASS 4">CLASS 4</option>
                      <option value="CLASS 5">CLASS 5</option>
                      <option value="CLASS 6">CLASS 6</option>
                      <option value="CLASS 7">CLASS 7</option>
                      <option value="CLASS 8">CLASS 8</option>
                      <option value="CLASS 9">CLASS 9</option>
                      <option value="CLASS 10">CLASS 10</option>
                      <option value="CLASS 11">CLASS 11</option>
                      <option value="CLASS 12">CLASS 12</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      placeholder="Student Name"
                      name="studentName"
                      type="text"
                      className="form-control"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <IoMaleFemale />
                    </span>
                    <select
                      name="gender"
                      className="form-select"
                      id="country-state"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaCalendarAlt />
                    </span>
                    <input
                      placeholder="Date of birth"
                      name="date_of_birth"
                      max="2024-02-22"
                      type="date"
                      className="form-control"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <p className="error-msg"></p>
              <div className="d-flex mt-3 gap-2">
                <button className="common-all-btn">Add Student</button>
                <Link to="/user-dashboard" className="common-all-btn">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
