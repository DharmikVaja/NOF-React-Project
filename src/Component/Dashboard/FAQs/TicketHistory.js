import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";


const TicketHistory = () => {
  return (
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
                <div className="pad-set register-border transaction-header justify-content-between">
                  <div className="head-for-all-page d-flex align-items-start gap-2 ">
                    <div className=" ">
                      <div className="">
                        <h3>SUPPORT HISTORY</h3>
                        <p>You can see your tickets here</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/account-setting" className=" justify-content-end">
                    <button className="common-btn">Back</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set">
                  <div className="d-flex align-items-center table-head-drop">
                    <div className="mx-3">
                      {/* <MdOutlineManageSearch className="fs-3" /> */}
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
                    
                  </div>
                </div>
                <div className="d-flex align-items-center mx-5">
                  <table className=" table table-responsive w-100 act-table gap-2">
                    <tr>
                      <th>S.No</th>
                      <th>Test / Practice Books</th>
                      <th>Date</th>
                      <th>Student Name</th>
                      <th>OrderId</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                    <tr>
                      <td colSpan="7" className="text-center">
                        No Data found
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
  );
};

export default TicketHistory;
