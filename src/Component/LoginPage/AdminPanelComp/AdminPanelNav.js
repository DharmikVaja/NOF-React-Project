import React, { useEffect, useState } from "react";
import "../../Dashboard/dashboard.css";
import NavLogo from "../../../../src/assets/logo.png";
import NOFUserLogo from "../../../../src/assets/Dashboard/NOF-top-right.png";
import { HiOutlineLogout } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import LogoImgUp from "../../../assets/Dashboard/menu-icon-dashboard-up.png";
import Stack from "react-bootstrap/Stack";
import { Scrollbars } from "react-custom-scrollbars-2";
import { RxDashboard } from "react-icons/rx";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdListAlt } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

const AdminPanelNav = () => {
  const [isNavBarsVisible, setNavBarsVisible] = useState(false);
  const [smShow, setSmShow] = useState(false);

  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleToggleNavBars = () => {
    setNavBarsVisible(!isNavBarsVisible);
  };
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  

  return (
   <div className="">
      <ScrollToTop />
      <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
        <div className="container-fluid ">
          <div className="w-100 m-auto row">
            <div className="col">
              <div className="d-flex justify-content-between align-items-center ">
                <a href="/" className="navbar-brand">
                  <img src={NavLogo} alt="logo " />
                </a>
                <div
                  className={`navbar-collapse ${
                    isNavBarsVisible ? "show" : "collapse"
                  }`}
                  id="basic-navbar-nav"
                >
                <div className="me-auto navbar-nav navBars">
                    <Scrollbars>
                      <Stack
                        direction="vertical"
                        gap={0.9}
                        className="col-md-12 mx-auto"
                      >
                        <Link
                          role="button12"
                          to="/admin-panel"
                          className={`nav-link dashboard-links`}
                          tabIndex={0}
                          onClick={() => handleMenuItemClick("dashboard")}
                        >
                          <RxDashboard className="fs-4 me-4" />
                          Dashboard
                        </Link>
                        {/* <Link
                          role="button"
                          to="/select-test"
                          className={`nav-link dashboard-links`}
                          tabIndex={0}
                        >
                          <IoSchoolOutline className="fs-4 me-4" />
                          NOF Olympiad Exams
                        </Link> */}
                        {/* <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/exam-guideline"
                        >
                          <HiOutlineClipboardDocumentList className="fs-4 me-4" />
                          Exam Guidelines
                        </Link> */}
                        {/* <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/practice-books"
                          //
                        >
                          <BsJournalText className="fs-4 me-4" />
                          NOF-Practice E-books
                        </Link> */}
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          //   to="/result-and-report"
                        >
                          <AiOutlinePieChart className="fs-4 me-4" />
                          Results and Reports
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          //   to="/activity-logs"
                        >
                          <GrDocumentPerformance className="fs-4 me-4" />
                          Activity Logs
                        </Link>
                        {/* <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/faqs"
                        >
                          <FaQuestion className="fs-4 me-4" />
                          FAQs
                        </Link> */}
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          //   to="/olympiad-syllabus"
                        >
                          <MdListAlt className="fs-4 me-4" />
                          Olympiads Syllabus
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          //   to="/account-setting"
                        >
                          <IoSettingsOutline className="fs-4 me-4" />
                          Account Settings
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          //   to="/signup"
                        >
                          <FaRegPlusSquare className="fs-4 me-4" /> Add New
                          Student
                        </Link>
                        {/*  */}
                        <Link
                          className="nav-link dashboard-links "
                          onClick={() => setSmShow(true)}
                          to="/"
                        >
                          <HiOutlineLogout className="fs-4 me-4 " /> Logout
                        </Link>
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
                      </Stack>
                    </Scrollbars>
                  </div>
                </div>

                {/* <Scrollbars> */}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic-button"
                    type="button"
                    className="profile-dropdown bottom dropdown-toggle btn btn-primary bg-transparent"
                  >
                    <img src={NOFUserLogo} alt="Nof User Logo" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="dropdown-switch dropdown">
                      <Dropdown.Item
                        className="dropdown-item"
                        role="button"
                        href="/"
                      >
                        LogOut
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                {/* </Scrollbars> */}

                <button
                  aria-controls="basic-navbar-nav"
                  type="button"
                  aria-label="Toggle navigation"
                  className={`navbar-toggler collapsed ${
                    isNavBarsVisible ? "active" : ""
                  }`}
                  onClick={handleToggleNavBars}
                >
                  <img src={LogoImgUp} className="img-fluid" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminPanelNav;
