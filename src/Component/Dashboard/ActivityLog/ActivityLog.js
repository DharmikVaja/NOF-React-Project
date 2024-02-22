import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "../dashboard.css";
import "./activity-log.css";
import { MdOutlineManageSearch } from "react-icons/md";
import ScrollToTop from "../../ScrollToTop/ScrollToTop.js";

const ActivityLog = () => {
  function clearFilter() {
    document.querySelector(".search-data").value = "";
  }
  return (
    <>
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
                        <h3>ACTIVITY LOGS</h3>
                        <p>You can see your Activity here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="pad-set">
                    <div className="d-flex align-items-center table-head-drop">
                      <div className="mx-5">
                        <MdOutlineManageSearch className="fs-3" />
                      </div>
                      <div className="search-div">
                        <div className="input-group activity-search-input">
                          <input
                            placeholder="Search"
                            name="search"
                            type="text"
                            className="search-data play-search1 form-control"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          className="common-all-btn"
                          onClick={clearFilter}
                        >
                          Clear Filter
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mx-5">
                    <table className=" table w-100 act-table">
                      <tr>
                        <th>S.No</th>
                        <th>Date & Time</th>
                        <th>Activity</th>
                        <th>Activity Description</th>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>Feb 20, 2024 10:12 PM</td>
                        <td>LOGGED OUT</td>
                        <td>
                          You have logged out Tue Feb 20 2024 at 10:12:23 PM
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Feb 20, 2024 10:12 PM</td>
                        <td>LOGGED OUT</td>
                        <td>
                          You have logged out Tue Feb 20 2024 at 10:12:23 PM
                        </td>
                      </tr>
                      <tr>
                        <td>3 </td>
                        <td>Feb 20, 2024 10:12 PM</td>
                        <td>LOGGED OUT</td>
                        <td>
                          You have logged out Tue Feb 20 2024 at 10:12:23 PM
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityLog;
