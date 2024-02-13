import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg ">
          <button
            className="navbar-toggler"
            type="button"
            style={{ backgroundColor: "white" }}
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="nav navbarClass">
              <li className="nav-item ">
                <a href="#" className="nav-link listNames">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link listNames">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link listNames">
                  Reports & Analysis
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link listNames">
                  Syllabus
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link listNames">
                  Downloads
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link listNames">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
