import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard.js";
import UserProfile from "../../../assets/Dashboard/edit-user-dash-profile.png";
import UserProfileEdit from "../../../assets/Dashboard/user-edit-rightbottom.png";
import ScrollToTop from "../../ScrollToTop/ScrollToTop.js";
import "../dashboard.css";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { IoMdMail } from "react-icons/io";
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
                  defaultActiveKey="profile"
                  id="fill-tab-example"
                  className="mb-3 "
                  fill
                >
                  <Tab eventKey="home" title="Student Details">
                    <DashUser1Student />
                  </Tab>
                  <Tab eventKey="profile" title="Parent Details">
                    <DashUser2Parent />
                  </Tab>
                  <Tab eventKey="longer-tab" title="Add Students">
                    <DashUser3Add />
                  </Tab>
                  <Tab eventKey="contact" title="Change Password">
                    <DashUser4ChangePsd/>
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
