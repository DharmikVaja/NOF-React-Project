import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddressComp1 from "./AddressComp1";
import AddressComp2 from "./AddressComp2";
import AddressComp3 from "./AddressComp3";

const AddressManager = () => {
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
                  <div className="head-for-all-page d-flex justify-content-between">
                    <div className="p-4 ">
                      <h3>Address Manager</h3>
                      <p>You can view, edit and add new address here</p>
                    </div>
                    <Link to="/account-setting" className="common-btn">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 "
            >
              <Tab eventKey="home" title="Address Details">
                <AddressComp1/>
              </Tab>
              <Tab eventKey="profile" title="Edit Address">
                <AddressComp2/>
              </Tab>
              <Tab eventKey="longer-tab" title="Add New Address">
               <AddressComp3/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressManager;
