import React from "react";
import { MdOutlineManageSearch } from "react-icons/md";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { IoMdSwap } from "react-icons/io";
import { Link } from "react-router-dom";

const TransactionHistory = () => {
  function clearFilter() {
    document.querySelector(".search-data").value = "";
  }
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
                  <div className="pad-set register-border transaction-header justify-content-between">
                    <div className="head-for-all-page d-flex align-items-start gap-2 ">
                      <IoMdSwap className=" fs-3 me-2" />
                      <div className=" ">
                        <div className="">
                          <h3>Transaction History</h3>
                          <p>You can check out your transactions here</p>
                        </div>
                      </div>
                    </div>
                      <Link
                        to="/account-setting"
                        className=" justify-content-end"
                      >
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
                        {/* <td>1 </td>
                        <td className="for_capitalize"></td>
                        <td>Dec 20, 2023 11:49 AM </td>
                        <td>45 </td>
                        <td className="text-success fw-bold">COMPLETED </td>
                        <td>Processing </td>
                        <td></td> */}
                      </tr>
                    </table>
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

export default TransactionHistory;
