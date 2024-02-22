import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "./acc-settings.css";
import ScrollToTop from "../../ScrollToTop/ScrollToTop.js";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { AiOutlineSwap } from "react-icons/ai";

const AccountSettings = () => {
  return (
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
                        <h3>ACCOUNT SETTINGS</h3>
                        <p>You can see your settings here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pad-set ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="account-set-inner cursorPointerClass">
                      <div className=" d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user">
                            <FaUser className="fs-5" />
                          </div>
                          <div className="set-marg ps-4">
                            <h4> User Profile</h4>
                          </div>
                        </div>
                        <Link to="/user-profile" className="dash-links">
                          <FaAngleRight className="fs-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="account-set-inner cursorPointerClass">
                        <div className=" d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="user">
                              <IoIosNotifications className="fs-5" />
                            </div>
                            <div className="set-marg ps-4">
                              <h4>Notifications</h4>
                            </div>
                          </div>
                      <Link to="/user-notification" className="dash-links">
                          <FaAngleRight className="fs-4" />
                      </Link>
                        </div>
                    </div>
                    <div className="account-set-inner cursorPointerClass">
                        <div className=" d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="user">
                              <IoLocationSharp className="fs-5" />
                            </div>
                            <div className="set-marg ps-4">
                              <h4>Address Manager</h4>
                            </div>
                          </div>
                      <Link to="/address-manager" className="dash-links">
                          <FaAngleRight className="fs-4" />
                      </Link>
                        </div>
                    </div>
                    <div className="account-set-inner cursorPointerClass">
                        <div className=" d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="user">
                              <IoCartSharp className="fs-5" />
                            </div>
                            <div className="set-marg ps-4">
                              <h4>My Orders</h4>
                            </div>
                          </div>
                      <Link to="/user-orders" className="dash-links">

                          <FaAngleRight className="fs-4" />
                      </Link>
                        </div>
                    </div>
                    <div className="account-set-inner cursorPointerClass">
                        <div className=" d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="user">
                              <AiOutlineSwap className="fs-5" />
                            </div>
                            <div className="set-marg ps-4">
                              <h4>Transactions History</h4>
                            </div>
                          </div>
                      <Link to="/transaction-history" className="dash-links">

                          <FaAngleRight className="fs-4" />
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
    </div>
  );
};

export default AccountSettings;
