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
import { Form, InputGroup } from "react-bootstrap";

const ActivityLog = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue)
  const handleSearchChange = (e) => {
    // Update the search value on every key press
    setSearchValue(e.target.value);
  };
  function clearFilter() {
    document.querySelector(".search-data").value = "";
  }

  const ActLog = [
    {
      id: 1,
      date: "Mar 12, 2024 10:43 AM",
      activity: "LOGGED OUT",
      description: " You have logged out Tue Mar 12 2024 at 10:43:43 AM",
    },
    {
      id: 2,
      date: "Mar 8, 2024 2:30 PM",
      activity: "LOGGED OUT",
      description: "You have logged out Fri Mar 08 2024 at 2:30:33 PM",
    },
    {
      id: 3,
      date: "Mar 8, 2024 12:06 PM",
      activity: "LOGGED OUT",
      description: " You have logged out Tue Mar 8 2024 at 12:06:00 PM",
    },
    {
      id: 4,
      date: "Mar 6, 2024 5:52 PM",
      activity: "LOGGED OUT",
      description: " You have logged out Wed Mar 06 2024 at 5:52:30 PM",
    },
    {
      id: 5,
      date: "Mar 6, 2024 5:43 PM",
      activity: "LOGGED OUT",
      description: " You have logged out Wed Mar 06 2024 at 5:41:36 PM",
    },
    {
      id: 6,
      date: "Mar 6, 2024 5:41 PM",
      activity: "LOGGED OUT",
      description: " You have logged out Wed Mar 06 2024 at 5:52:30 PM",
    },
    {
      id: 7,
      date: "Mar 6, 2024 2:49 PM",
      activity: "LOGGED OUT",
      description: "You have logged out Wed Mar 06 2024 at 2:49:07 PM",
    },
    {
      id: 8,
      date: "Mar 5, 2024 6:00 PM",
      activity: "LOGGED OUT",
      description: " You have logged out Tue Mar 05 2024 at 6:00:50 PM",
    },
    {
      id: 9,
      date: "Mar 5, 2024 4:11 PM",
      activity: "LOGGED OUT",
      description: " You have logged out Tue Mar 05 2024 at 4:11:25 PM",
    },
    {
      id: 10,
      date: "Mar 5, 2024 2:51 PM",
      activity: "LOGGED OUT",
      description: "You have logged out Tue Mar 05 2024 at 2:51:42 PM",
    },
  ];
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
                          <Form className="input-group activity-search-input">
                            <InputGroup>
                              <Form.Control
                                className="search-data play-search1 form-control"
                                onChange ={handleSearchChange}
                                type="text"
                                name="search"
                                placeholder="Type to search"
                              />
                            </InputGroup>
                          </Form>
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
                  <div className=" pad-set">
                    <table className=" table act-table table-responsive ">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Date & Time</th>
                          <th scope="col">Activity</th>
                          <th scope="col">Activity Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ActLog
                        .filter((item)=>{
                          return searchValue.toLowerCase() === ""
                          ? item : item.date.toLowerCase().includes(searchValue)
                        })
                        .map((item) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.activity}</td>
                            <td>{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
