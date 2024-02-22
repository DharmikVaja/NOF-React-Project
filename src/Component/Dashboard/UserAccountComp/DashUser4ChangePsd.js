import React from "react";
import { IoIosLock, IoMdEyeOff } from "react-icons/io";

const DashUser4ChangePsd = () => {
  return (
    <div>
      <div className="pad-set">
        <div className="delivery-form mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock />
                </span>
                <input
                  placeholder="Old Password"
                  name="OldPassword"
                  type="password"
                  className="form-control"
                  defaultValue=""
                />
                <span className="input-group-text">
                  <IoMdEyeOff />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock />
                </span>
                <input
                  placeholder="New Password"
                  name="NewPassword"
                  type="password"
                  className="form-control"
                  defaultValue=""
                />
                <span className="input-group-text">
                  <IoMdEyeOff />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock />
                </span>
                <input
                  placeholder="Confirm New Password"
                  name="ConfirmPassword"
                  type="password"
                  className="form-control"
                  defaultValue=""
                />
                <span className="input-group-text">
                  <IoMdEyeOff />
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
