import React, { useState } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "../dashboard.css";
import "./activity-log.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineManageSearch,
} from "react-icons/md";
import ScrollToTop from "../../ScrollToTop/ScrollToTop.js";

const ActivityLog = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    // Update the search value on every key press
    setSearchValue(e.target.value);
  };
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
                    <div className="d-flex align-items-center justify-content-between table-head-drop">
                      <div className="d-flex justify-content-start align-items-center">
                        <div>
                          <MdOutlineManageSearch className="fs-3" />
                        </div>

                        <div className="search-div ms-3">
                          <div className="input-group activity-search-input">
                            <input
                              placeholder="Search"
                              name="search"
                              type="text"
                              className="search-data play-search1 form-control"
                              value={searchValue}
                              onChange={handleSearchChange}
                            />
                          </div>
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
                  <table className=" table act-table table-responsive w-max-width ">
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Activity</th>
                      <th scope="col">Activity Description</th>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Feb 20, 2024 10:12 PM</td>
                      <td>LOGGED OUT</td>
                      <td>
                        You have logged out Tue Feb 20 2024 at 10:12:23 PM
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Feb 20, 2024 10:12 PM</td>
                      <td>LOGGED OUT</td>
                      <td>
                        You have logged out Tue Feb 20 2024 at 10:12:23 PM
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Feb 20, 2024 10:12 PM</td>
                      <td>LOGGED OUT</td>
                      <td>
                        You have logged out Tue Feb 20 2024 at 10:12:23 PM
                      </td>
                    </tr>
                  </table>
                  <div className="d-flex justify-content-center paginate-register">
                    <div className="d-flex">
                      <div className="d-flex justify-content-center paginate-register">
                        <div className="d-flex align-items-center">
                          <button className="common-btn">
                            <MdKeyboardArrowLeft />
                          </button>
                          <button className="common-btn m-2">
                            Page 1 of 1
                          </button>
                          <button className="common-btn">
                            <MdKeyboardArrowRight />
                          </button>
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
    </>
  );
};

export default ActivityLog;
