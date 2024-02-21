import React, { useState } from "react";
import "../dashboard.css";
import NavLogo from "../../../../src/assets/logo.png";
import "../dashboard.css";
import NOFUserLogo from "../../../../src/assets/Dashboard/NOF-top-right.png";
import Exam1 from "../../../../src/assets/Dashboard/register-student.png";
import ExamG1 from "../../../../src/assets/Dashboard/exam-guideline.png";
import PBook1 from "../../../../src/assets/Dashboard/pending-exam.png";
import Report1 from "../../../../src/assets/Dashboard/reports.png";
import Activity1 from "../../../../src/assets/Dashboard/activity-log.png";
import { FaQuestionCircle } from "react-icons/fa";
import Syl1 from "../../../../src/assets/Dashboard/Syllabus.png";
import { FaCog } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NavbarDashboard = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container-fluid">
          <div className="w-100 m-auto row">
            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <a href="/" className="navbar-brand">
                  <img src={NavLogo} alt="logo " />
                </a>
                <div className="navbar-collapse collapse" id="basic-navbar-nav">
                  <div className="me-auto navbar-nav navBars">
                    <a
                      role="button"
                      href="/user-dashboard"
                      className={`nav-link ${
                        activeNavItem === 0 ? "active" : ""
                      }`}
                      tabIndex={0}
                      onClick={() => handleNavItemClick(0)}
                    >
                      <RxDashboard className="fs-4 me-4" />
                      Dashboard
                    </a>
                    <Link
                      role="button"
                      to="/select-test"
                      className={`nav-link ${
                        activeNavItem === 0 ? "active" : ""
                      }`}
                      tabIndex={0}
                    >
                      <img
                        src={Exam1}
                        className="img-fluid dark me-4"
                        alt="icon"
                      />
                      NOF Olympiad Exams
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/exam-guideline"
                    >
                      <img
                        src={ExamG1}
                        className="img-fluid dark me-4"
                        alt="icon"
                      />
                      Exam Guidelines
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/practice-books"
                      // 
                    >
                      <img
                        src={PBook1}
                        className="img-fluid dark me-4"
                        alt="icon"
                      />
                      NOF-Practice E-books
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/result-and-report"
                    >
                      <img
                        src={Report1}
                        className="img-fluid dark me-4"
                        alt="icon"
                      />
                      Results and Reports
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/activity-logs"
                    >
                      <img
                        src={Activity1}
                        className="img-fluid dark me-4 "
                        alt="icon"
                      />
                      Activity Logs
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/faqs"
                    >
                      <FaQuestionCircle className="fs-4 me-4" />
                      FAQs
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/olympiad-syllabus"
                    >
                      <img
                        src={Syl1}
                        className="img-fluid dark me-4"
                        alt="icon"
                      />
                      Olympiads Syllabus
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/account-setting"
                    >
                      <FaCog className="fs-4 me-4" />
                      Account Settings
                    </Link>
                    <Link
                      role="button"
                      className="nav-link"
                      tabIndex={0}
                      to="/add-student"
                    >
                      <FaPlus className="fs-4 me-4" /> Add New Student
                    </Link>
                    {/*  */}
                    <Button
                      className="nav-link "
                      onClick={() => setSmShow(true)}
                    >
                      <FaSignOutAlt className="fs-4 me-4 " /> Logout
                    </Button>
                    <Link
                      role="button"
                      className="nav-link me-2"
                      tabIndex={0}
                      to="/"
                    >
                      <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
                          <Modal.Body>Logout successfully!!</Modal.Body>
                        </Modal.Header>
                      </Modal>
                    </Link>
                    {/*  */}
                  </div>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    type="button"
                    aria-expanded="false"
                    className="profile-dropdown bottom dropdown-toggle btn btn-primary bg-transparent"
                  >
                    <img src={NOFUserLogo} alt="Nof User Logo" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="dropdown-switch dropdown">
                      <Dropdown.Item
                        className="dropdown-item"
                        role="button"
                        href="//user-dashboard"
                      >
                        LogOut
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        role="button"
                        href="/dashboard"
                      >
                        Switch User
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                <button
                  aria-controls="basic-navbar-nav"
                  type="button"
                  aria-label="Toggle navigation"
                  className="navbar-toggler collapsed"
                >
                  <img src="" className="img-fluid" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
