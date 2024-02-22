import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineManageSearch,
} from "react-icons/md";
import "./acc-settings.css";

const MyOrdersComp = () => {
  function clearFilter() {
    document.querySelector(".search-data").value = "";
  }
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
                <div className="pad-set register-border">
                  <div className="head-for-all-page">
                    <div>
                      <h3>ALL ORDER DETAILS</h3>
                      <p>You can check your orders here</p>
                    </div>
                  </div>
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
                      <button className="common-all-btn" onClick={clearFilter}>
                        Clear Filter
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-5">
                  <table className=" table table-responsive w-100 act-table gap-2">
                    <tr>
                      <th>S.No</th>
                      <th>Name </th>
                      <th>Date & Time</th>
                      <th>Total Amount</th>
                      <th>Payment Status</th>
                      <th>Delivery Status</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td>1 </td>
                      <td className="for_capitalize"></td>
                      <td>Dec 20, 2023 11:49 AM </td>
                      <td>45 </td>
                      <td className="text-success fw-bold">COMPLETED </td>
                      <td>Processing </td>
                      <td>
                        <button className="dash-order-btn  fw-bold text-white">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1 </td>
                      <td className="for_capitalize"></td>
                      <td>Dec 20, 2023 11:49 AM </td>
                      <td>45 </td>
                      <td className="text-success fw-bold">COMPLETED </td>
                      <td>Processing </td>
                      <td>
                        <button className="dash-order-btn  fw-bold text-white">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1 </td>
                      <td className="for_capitalize"></td>
                      <td>Dec 20, 2023 11:49 AM </td>
                      <td>45 </td>
                      <td className="text-success fw-bold">COMPLETED </td>
                      <td>Processing </td>
                      <td>
                        <button className="dash-order-btn fw-bold text-white">
                          View
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="d-flex justify-content-center paginate-register">
                  <div className="d-flex">
                    <div className="d-flex justify-content-center paginate-register">
                      <div className="d-flex align-items-center">
                        <button className="common-btn">
                          <MdKeyboardArrowLeft />
                        </button>
                        <button className="common-btn m-2">Page 1 of 1</button>
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
  );
};

export default MyOrdersComp;
