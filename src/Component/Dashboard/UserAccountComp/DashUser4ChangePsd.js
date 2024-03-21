import React, { useState } from "react";
import { IoIosLock, IoMdEyeOff } from "react-icons/io";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { FaEye } from "react-icons/fa";

const DashUser4ChangePsd = () => {
  const [showPsd, setShowPsd] = useState(false);
  const [showPsd2, setShowPsd2] = useState(false);
  const [showPsd3, setShowPsd3] = useState(false);

  return (
    <div>
      <ScrollToTop />
      <div className="pad-set">
        <div className="delivery-form mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock className="fs-4" />
                </span>
                <input
                  placeholder="Old Password"
                  name="OldPassword"
                  type={showPsd ? "password" : "text"}
                  className="form-control"
                  defaultValue=""
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPsd(!showPsd)}
                >
                  {showPsd ? (
                    <IoMdEyeOff className="fs-4" />
                  ) : (
                    <FaEye className="fs-4" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock className="fs-4" />
                </span>
                <input
                  placeholder="New Password"
                  name="NewPassword"
                  type={showPsd2 ? "password" : "text"}
                  className="form-control"
                  defaultValue=""
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPsd2(!showPsd2)}
                >
                  {showPsd2 ? (
                    <IoMdEyeOff className="fs-4" />
                  ) : (
                    <FaEye className="fs-4" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock className="fs-4" />
                </span>
                <input
                  placeholder="Confirm New Password"
                  name="ConfirmPassword"
                  type={showPsd3 ? "password" : "text"}
                  className="form-control"
                  defaultValue=""
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPsd3(!showPsd3)}
                >
                  {showPsd3 ? (
                    <IoMdEyeOff className="fs-4" />
                  ) : (
                    <FaEye className="fs-4" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <p className="error-msg" style={{ textAlign: "left" }} />
          <div className="d-flex mt-3 gap-2">
            <button className="common-all-btn">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUser4ChangePsd;
