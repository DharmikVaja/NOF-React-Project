import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "./faq.css"
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <div>
      <div>
        <div className="dashboard-layout ">
          <div className="inner-dash-bpx ">
            <header className="main-header login-header-home">
              <NavbarDashboard />
            </header>
            <div className="dash-outer-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="pad-set register-border">
                    <div className="head-for-all-page">
                      <div>
                        <h3>SUPPORT & HELP</h3>
                        <p>You can submit your problem here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pad-set ">
                <div className="inter-grey-box pad-set">
                  <h4 className="same-head-dash">Create New ticket</h4>
                  <div className="delivery-form pt-2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            name="request_type"
                            className="select-faq form-select faq-inputs "
                            id="country-state"
                          >
                            <option>Select Ticket request</option>
                            <option value="Exam">Exam</option>
                            <option value="Profile">Profile</option>
                            <option value="Book">Book</option>
                            <option value="Technical">Technical</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <textarea
                            name="description"
                            placeholder="Write about your problem"
                            rows={4}
                            id="exampleForm.ControlTextarea1"
                            className="form-control  faq-inputs "
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <p />
                    <div className="mt-2 mb-4">
                      <button className="border-all-btn">
                        <input
                          type="file"
                          className="form-control file-upload-info"
                          placeholder="Select File"
                          id="uploadFile"
                        />
                        <FaDownload />
                        Upload Attachment
                      </button>
                    </div>
                    <p className="error-msg" />
                    <div className="d-flex gap-2">
                      <button className="common-all-btn">Submit ticket</button>
                      <Link to="/faqs" className="common-all-btn" href="/faq">
                        Back
                      </Link>
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

export default Ticket;
