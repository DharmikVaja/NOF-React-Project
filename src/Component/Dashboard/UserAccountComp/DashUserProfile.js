import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard.js";
import ScrollToTop from "../../ScrollToTop/ScrollToTop.js";
import "../dashboard.css";
import DashUser1Student from "./DashUser1Student.js";
import DashUser2Parent from "./DashUser2Parent.js";
import DashUser3Add from "./DashUser3Add.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DashUser4ChangePsd from "./DashUser4ChangePsd.js";

const DashUserProfile = () => {
  return (
    <div>
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
                          <h3>My User Profile</h3>
                          <p>You can see your User Profile</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Tabs
                  defaultActiveKey="Student Details"
                  id="fill-tab-example"
                  className="mb-3 "
                  fill
                >
                  <Tab eventKey="student" title="Student Details">
                    <DashUser1Student />
                  </Tab>
                  <Tab eventKey="parent" title="Parent Details">
                    <DashUser2Parent />
                  </Tab>
                  <Tab eventKey="add" title="Add Students">
                    <DashUser3Add />
                  </Tab>
                  <Tab eventKey="change" title="Change Password">
                    <DashUser4ChangePsd />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUserProfile;
