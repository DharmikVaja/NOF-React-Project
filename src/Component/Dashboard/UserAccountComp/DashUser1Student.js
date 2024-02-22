import React from "react";
import UserProfile from "../../../assets/Dashboard/edit-user-dash-profile.png";
import UserProfileEdit from "../../../assets/Dashboard/user-edit-rightbottom.png";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";

const DashUser1Student = () => {
  return (
    <div>
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
        <div className="delivery-form mt-4 p-5">
          <div className="row">
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  className="dash-input  form-control ms-1"
                  name="studentname"
                  type="text "
                  value="Hibba"
                  readonly
                />
              </div>
            </div>
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaAddressCard />
                </span>
                <input
                  className="dash-input form-control ms-1"
                  name="studentname"
                  type="text "
                  value="DO777"
                  readonly
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  {" "}
                  <FaSchool />
                </span>
                <input
                  className="dash-input form-control ms-1"
                  name="studentname"
                  type="text "
                  value="DPS Monarch International School, Doha, Qatar"
                />
              </div>
            </div>
            <div className="col md-5">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <IoSchool />
                </span>
                <label for="exampleFormControlSelect1"></label>
                <select
                  className=" dash-input form-control ms-1"
                  id="exampleFormControlSelect1"
                  type="text "
                  value="CLASS 8"
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
                  <BsGenderAmbiguous />
                </span>
                <label for="exampleFormControlSelect1"></label>
                <select
                  className="dash-input form-control ms-1"
                  id="exampleFormControlSelect1"
                  type="text "
                  value="Select Gender"
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
                  <FaCalendarAlt />
                </span>
                <Form.Control type="date" />
              </div>
            </div>
          </div>

          <p className="error-msg"></p>
          <div className="d-flex mt-3 gap-2">
            <button className="common-all-btn">Request Change</button>
            <button className="common-all-btn">Update</button>
            <button className="common-all-btn">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUser1Student;
