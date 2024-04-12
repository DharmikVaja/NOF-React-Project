import React, { useEffect, useState } from "react";

import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import DashUser2 from "./DashUser2.json";
import countriesData from "./DashUser2.json";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const DashUser2Parent = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [studentFName, setStudentFName] = useState("");
  const [studentMName, setStudentMName] = useState("");
  const [selectedNum, setSelectedNum] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");

  const [studentParentDetails, setStudentParentDetails] = useState({
    stu_f_name: "",
    stu_m_name: "",
    stu_num: "",
    stu_email: "",
  });

  useEffect(() => {
    const storedStudentDetails = localStorage.getItem("studentParentDetails");
    if (storedStudentDetails) {
      // If storedStudentDetails exist in localStorage, parse it and update state
      setStudentParentDetails(JSON.parse(storedStudentDetails));
    }
  }, []);

  useEffect(() => {
    // Update state with values from studentParentDetails when it changes
    setStudentFName(studentParentDetails.stu_f_name);
    setStudentMName(studentParentDetails.stu_m_name);
    setSelectedNum(studentParentDetails.stu_num);
    setSelectedEmail(studentParentDetails.stu_email);
  }, [studentParentDetails]);

  const handleFNameChange = (e) => {
    setStudentFName(e.target.value);
  };

  const handleMNameChange = (e) => {
    setStudentMName(e.target.value);
  };

  const handleNumChange = (e) => {
    setSelectedNum(e.target.value);
  };

  const handleEmailChange = (e) => {
    setSelectedEmail(e.target.value);
  };

  const handleUpdate = () => {
    setStudentParentDetails({
      stu_f_name: studentFName,
      stu_m_name: studentMName,
      stu_num: selectedNum,
      stu_email: selectedEmail,
    });

    localStorage.setItem(
      "studentParentDetails",
      JSON.stringify({
        stu_f_name: studentFName,
        stu_m_name: studentMName,
        stu_num: selectedNum,
        stu_email: selectedEmail,
      })
    );
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <>
      <div className="pad-set">
        <ScrollToTop />
        <div className="delivery-form mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <FaUser className="fs-4" />
                </span>
                <input
                  className="form-control dash-input "
                  name="fatherName"
                  type="text"
                  value={studentFName}
                  placeholder="Father Name"
                  onChange={handleFNameChange}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <FaUser className="fs-4" />
                </span>
                <input
                  className="form-control dash-input "
                  name="motherName"
                  type="text"
                  value={studentMName}
                  placeholder="Mother Name"
                  onChange={handleMNameChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <select
                  aria-label="Default select example"
                  name="countryCode"
                  className="form-select d-flex "
                  onChange={handleCountryChange}
                  value={selectedCountry || "IN"}
                >
                  {countriesData.map((country, index) => (
                    <option
                      key={index}
                      value={country.code}
                      data-phonecode={country.dial_code}
                    >
                      {country.name} ({country.dial_code})
                    </option>
                  ))}
                </select>
                <input
                  name="phoneNumber"
                  type="number"
                  onChange={handleNumChange}
                  className="form-control"
                  value={selectedNum}
                  placeholder="Phone Number"
                  readOnly=""
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoMdMail className="fs-4" />
                </span>
                <input
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  // readOnly=""
                  onChange={handleEmailChange}
                  className=" dash-input form-control"
                  value={selectedEmail}
                />
              </div>
            </div>
          </div>
          <p className="error-msg" />
          <div className="d-flex mt-3 gap-2">
            <input
              type="submit"
              value={"Save"}
              className="common-all-btn"
              onClick={handleUpdate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashUser2Parent;
