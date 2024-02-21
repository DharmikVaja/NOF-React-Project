import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard.js";
import UserProfile from "../../../assets/Dashboard/edit-user-dash-profile.png";
import UserProfileEdit from "../../../assets/Dashboard/user-edit-rightbottom.png";
import ScrollToTop from "../../ScrollToTop/ScrollToTop.js";
import "../dashboard.css";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";

const DashUserProfile = () => {
  return (
    <div>
      <div>
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
                          <h3>My User Profile</h3>
                          <p>You can see your User Profile</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="cycle-tab-container">
                      <ul className="nav nav-tabs">
                        <li className="cycle-tab-item active">
                          <a
                            className="nav-link active"
                            role="tab"
                            data-toggle="tab"
                            href="#student-details"
                          >
                            Student Details
                          </a>
                        </li>
                        <li className="cycle-tab-item">
                          <a
                            className="nav-link"
                            role="tab"
                            data-toggle="tab"
                            href="#parent-details"
                          >
                            Parent Details
                          </a>
                        </li>
                        <li className="cycle-tab-item">
                          <a
                            className="nav-link"
                            role="tab"
                            data-toggle="tab"
                            href="#add-student"
                          >
                            Add Students
                          </a>
                        </li>
                        <li className="cycle-tab-item">
                          <a
                            className="nav-link"
                            role="tab"
                            data-toggle="tab"
                            href="#change-psd"
                          >
                            Change Password
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active in"
                          id="student-details"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="pad-set">
                            <div className="right-image">
                              <div
                                id="preview"
                                className="preview-box-new right-image"
                              >
                                <img src={UserProfile} alt="" />
                              </div>
                              <div className="edit-image">
                                <label
                                  htmlFor="uploadFile"
                                  className="img-trigger"
                                >
                                  <img
                                    src={UserProfileEdit}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </label>
                                <input type="file" id="uploadFile" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="delivery-form mt-4">
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
                                <button className="common-all-btn">
                                  Request Change
                                </button>
                                <button className="common-all-btn">Update</button>
                                <button className="common-all-btn">Back</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="parent-details"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          Palo santo kogi ramps nostrud organic schlitz, art
                          party PBR&amp;B tbh taxidermy hammock officia chia
                          farm-to-table irony.{" "}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="add-student"
                          role="tabpanel"
                          aria-labelledby="messages-tab"
                        >
                          Asymmetrical sustainable live-edge tempor eiusmod kale
                          chips cloud bread vexillologist et man bun pitchfork
                          hashtag excepteur scenester ethical.
                        </div>
                        <div
                          className="tab-pane fade"
                          id="change-psd"
                          role="tabpanel"
                          aria-labelledby="settings-tab"
                        >
                          {" "}
                          Literally wolf flexitarian snackwave raw denim bitters
                          ut synth kombucha consequat twee polaroid.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUserProfile;
