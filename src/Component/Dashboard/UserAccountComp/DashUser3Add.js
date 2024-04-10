import React from "react";
import { FaCalendarAlt, FaRegIdCard, FaSchool, FaUser } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import DashUser3Data from "./DashUser3data";
import "../dashboard.css";

const DashUser3Add = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="pad-set">
        <div className="delivery-form mt-4">
          <div className="row d-flex justify-content-between">
            <div className="col-md-5">
              <div className="mb-3 input-group ">
                <span className="input-group-text">
                  <FaRegIdCard className="fs-4" />
                </span>
                <DashUser3Data />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3 input-group  ">
                <span className="input-group-text">
                  <FaSchool className="fs-4" />
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

          <div className="row d-flex justify-content-between">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <GiTeacher className="fs-4" />
                </span>
                <select
                  name="studentClass"
                  className="form-select "
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
                  <FaUser className="fs-4" />
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
          <div className="row d-flex justify-content-between">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <BsGenderAmbiguous className="fs-4" />
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
                  <FaCalendarAlt className="fs-4" />
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

          <p className="error-msg" />
          <div className="d-flex mt-3 gap-2">
            <button className="common-all-btn">Add Student</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUser3Add;
