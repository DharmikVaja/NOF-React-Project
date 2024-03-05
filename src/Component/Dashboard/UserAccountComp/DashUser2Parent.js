import React, { useState } from "react";

import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import DashUser2 from "./DashUser2.json";
import countriesData from "./DashUser2.json";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const DashUser2Parent = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

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
                  <FaUser />
                </span>
                <input
                  placeholder="Father Name"
                  name="fatherName"
                  type="text"
                  className="form-control"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  placeholder="Mother Name"
                  name="motherName"
                  type="text"
                  className="form-control"
                  defaultValue=""
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
                  className="form-select d-flex"
                  onChange={handleCountryChange}
                  value={selectedCountry}
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
                  placeholder="Phone Number"
                  type="number"
                  readOnly=""
                  className="form-control"
                  defaultValue={97430087421}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoMdMail />
                </span>
                <input
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  readOnly=""
                  className="form-control"
                  defaultValue="stu503924@misdoha.com"
                />
              </div>
            </div>
          </div>
          <p className="error-msg" />
          <div className="d-flex mt-3 gap-2">
            <input type="submit" value={"Save"} className="common-all-btn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashUser2Parent;
