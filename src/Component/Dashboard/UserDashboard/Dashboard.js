import React from "react";
import "../dashboard.css";
import UserProfile from "../../../../src/assets/Dashboard/edit-user-dash-profile.png";
import CSgif from "../../../../src/assets/Dashboard/coming-soon-gif.gif";
import NavbarDashboard from "./NavbarDashboard";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const Dashboard = () => {
  const stuDetailsString = localStorage.getItem("studentDetails");
  const stuDetails = JSON.parse(stuDetailsString);
  console.log(stuDetails);

  const stuEmail = localStorage.getItem("email:")
  return (
    <div className="dashboard-layout ">
      <div className="inner-dash-bpx ">
        <header className="main-header login-header-home">
          <NavbarDashboard />
          <ScrollToTop />
        </header>
        <section className="dash-outer-box">
          <div className="pad-set">
            <div className="row">
              <div className="col-md-6">
                <div className="grey-dash-box">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="left-content max-100">
                      <h3 className="for_capitalize">Welcome {stuDetails.stu_name}</h3>
                      <ul className="blue-content">
                        <li>Class - {stuDetails.stu_class}</li>
                        <li>
                          School Name - DPS Monarch International School, Doha,
                          Qatar
                        </li>
                        <li>Email - {stuEmail}</li>
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
                        <div className="d-flex flex-column ">
                          <span>
                            स्लॉट 𝟭 और 𝟮 स्टूडेंट्स के लिए 𝗟𝗔𝗦𝗧 𝗖𝗛𝗔𝗡𝗖𝗘 जिनकी 𝗡𝗢𝗙
                            𝗲𝘅𝗮𝗺 𝗺𝗶𝘀𝘀 हो गई थी: ...
                          </span>
                          <br />
                          <span>
                            𝗟𝗔𝗦𝗧 & 𝗙𝗜𝗡𝗔𝗟 𝗖𝗔𝗟𝗟 𝗳𝗼𝗿 𝗦𝗹𝗼𝘁 𝟭 & 𝟮 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝘄𝗵𝗼
                            𝗺𝗶𝘀𝘀𝗲𝗱 𝘁𝗵𝗲𝗶𝗿 𝗡𝗢𝗙 𝗲𝘅𝗮𝗺𝘀: ...
                          </span>
                          <br />
                          <span>Enhancements to Your NOF Dashboard ...</span>
                        </div>
                      </h5>
                    </div>
                  </div>
                  <div className="text-end">
                    <Link className="view-all" to="/user-notification">
                      View all
                    </Link>
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
                    <Link className="view-all" to="/activity-logs">
                      View all
                    </Link>
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
