import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../../navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="nav navbarClass">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Reports & Analysis
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Syllabus
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Downloads
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
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
