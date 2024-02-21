import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const DashNotification = () => {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNotification;
