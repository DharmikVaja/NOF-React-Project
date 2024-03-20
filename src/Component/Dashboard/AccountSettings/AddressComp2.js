import React from "react";
import { FaMapPin } from "react-icons/fa";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import CountryData from "./selectCountryData"

const AddressComp2 = () => {
  return (
    <div>
      <ScrollToTop />
      <div
        role="tabpanel"
        id="uncontrolled-tab-example-tabpane-editaddress"
        aria-labelledby="uncontrolled-tab-example-tab-editaddress"
        className="fade tab-pane active show"
      >
        <div className="pad-set">
          <div className="delivery-form mt-4">
            <div className="row">
              <div className="col-md-5">
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaMapLocationDot />
                  </span>
                  <input
                    placeholder="Flat/Door/Block.No"
                    name="houseNo"
                    type="text"
                    className="form-control"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaLocationDot />
                  </span>
                  <input
                    placeholder="Street/Lane/Area/Locality"
                    name="area"
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
                  <span className="input-group-text">
                    <FaMapPin />
                  </span>
                  <input
                    placeholder="Pin code"
                    name="pinCode"
                    type="number"
                    className="form-control"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaLocationDot />
                  </span>
                  <input
                    placeholder="City"
                    name="city"
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
                  <span className="input-group-text">
                    <FaLocationDot />
                  </span>
                  <input
                    placeholder="State"
                    name="state"
                    type="text"
                    className="form-control"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaLocationDot />
                  </span>
                  <CountryData />
                </div>
              </div>
            </div>
            <p className="error-msg" />
            <div className="d-flex mt-3 gap-2">
              <button className="common-all-btn">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComp2;
