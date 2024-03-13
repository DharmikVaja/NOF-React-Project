import React from "react";
import "../login-page.css";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import AdminPanelNav from "./AdminPanelNav";

const AdminPanel = () => {
  return (
    <div className="dashboard-layout ">
      <div className="inner-dash-bpx ">
        <header className="main-header login-header-home">
          <AdminPanelNav />
          <ScrollToTop />
        </header>
      </div>
    </div>
  );
};

export default AdminPanel;
