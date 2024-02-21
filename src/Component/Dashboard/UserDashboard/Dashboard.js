import React from "react";
import "../dashboard.css";
import UserProfile from "../../../../src/assets/Dashboard/edit-user-dash-profile.png";
import CSgif from "../../../../src/assets/Dashboard/coming-soon-gif.gif";
import NavbarDashboard from "./NavbarDashboard";

const Dashboard = () => {
  return (
    <div className="dashboard-layout ">
      <div className="inner-dash-bpx ">
        <header className="main-header login-header-home">
          <NavbarDashboard/>
        </header>
        <section className="dash-outer-box">
          <div className="pad-set">
            <div className="row">
              <div className="col-md-6">
                <div className="grey-dash-box">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="left-content max-100">
                      <h3 className="for_capitalize">Welcome </h3>
                      <ul className="blue-content">
                        <li>Class - CLASS 8</li>
                        <li>
                          School Name - DPS Monarch International School, Doha,
                          Qatar
                        </li>
                        <li>Email - stu503924@misdoha.com</li>
                        <li className="opted-olympiad-box">
                          Opted Olympiad &amp; Books :-
                        </li>
                        <ul className="black-inner list-course">
                          <li>International Science Olympiad</li>
                          <li>International Math Olympiad</li>
                          <li>International GK Olympiad</li>
                        </ul>
                        <ul className="black-inner list-course" />
                      </ul>
                    </div>
                    <div className="right-image">
                      <img
                        src={UserProfile}
                        className="img-fluid logo"
                        alt="user profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="grey-dash-box">
                  <div className="">
                    <div className=" left-content">
                      <h4 className="for-dash-h4">Notifications</h4>
                      <h5>
                        <b />
                        <span>
                          Don't miss your last chance to take the missed NOF
                          examinations. The exam window will open from January
                          16th to 18th, running from 9 AM to 8 PM (IST) for
                          three consecutive days. Seize this last opportunity,
                          as no further chances will be provided under any
                          circumstances.
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="text-end">
                    <a className="view-all" href="/dashboard">
                      View all
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="grey-dash-box">
                  <div className="">
                    <div className=" left-content">
                      <h4 className="for-dash-h4">Overall Performance</h4>
                      <div className="comming-soon-gif">
                        <img
                          src={CSgif}
                          className="img-fluid me-4 "
                          alt="gif"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="grey-dash-box">
                  <div className="">
                    <div className=" left-content">
                      <h4 className="for-dash-h4">My Activity</h4>
                      <h5>
                        <b>1 LOGGED OUT :</b>
                        <span>
                          You have logged out Tue Feb 20 2024 at 1:46:25 PM
                        </span>
                      </h5>
                      <h5>
                        <b>2 LOGGED OUT :</b>
                        <span>
                          You have logged out Mon Feb 19 2024 at 1:49:05 PM
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="text-end">
                    <a className="view-all" href="/dashboard">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-exam-schedule table-responsive">
                  <h4 className="for-dash-h4">Exam Schedule</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th width="20%">Subject </th>
                        <th width="20%">Exam Start Date</th>
                        <th width="20%">Exam End Date</th>
                        <th width="20%">Exam Duration</th>
                        <th width="20%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5}>
                          <p className="text-center">No Data Found</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
