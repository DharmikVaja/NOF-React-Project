import React, { useEffect, useState } from "react";
import "../dashboard.css";
import NavLogo from "../../../../src/assets/logo.png";
import NOFUserLogo from "../../../../src/assets/Dashboard/NOF-top-right.png";
import { HiOutlineLogout } from "react-icons/hi";
import { GrDocumentPerformance } from "react-icons/gr";
// import { FaRegPlusSquare } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FaQuestion } from "react-icons/fa6";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import LogoImgUp from "../../../assets/Dashboard/menu-icon-dashboard-up.png";
import { IoSchoolOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsJournalText } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdListAlt } from "react-icons/md";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Scrollbars } from "react-custom-scrollbars-2";

const NavbarDashboard = () => {
  const [isNavBarsVisible, setNavBarsVisible] = useState(false);
  const [smShow, setSmShow] = useState(false);

  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleToggleNavBars = () => {
    setNavBarsVisible(!isNavBarsVisible);
  };
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  const [isToken, setIsToken] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsToken(false);
    setSmShow(true);
    setSmShow1(false)
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (isToken) {
      navigate("/");
    }
  }, [isToken]);
  const [smShow1, setSmShow1] = useState(false);


  return (
    <div className="">
      <ScrollToTop />
      <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
        <div className="container-fluid ">
          <div className="w-100 m-auto row">
            <div className="col">
              <div className="d-flex justify-content-between align-items-center ">
                <Link to="/" className="navbar-brand">
                  <img src={NavLogo} alt="logo" />
                </Link>
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
                        className="col-md-12 mx-auto dash-navbar"
                      >
                        <Link
                          role="button12"
                          to="/user-dashboard"
                          className={`nav-link dashboard-links`}
                          tabIndex={0}
                          onClick={() => handleMenuItemClick("dashboard")}
                        >
                          <RxDashboard className="fs-4 me-4" />
                          Dashboard
                        </Link>
                        <Link
                          role="button"
                          to="/select-test"
                          className={`nav-link dashboard-links`}
                          tabIndex={0}
                        >
                          <IoSchoolOutline className="fs-4 me-4" />
                          NOF Olympiad Exams
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/exam-guideline"
                        >
                          <HiOutlineClipboardDocumentList className="fs-4 me-4" />
                          Exam Guidelines
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/practice-books"
                          //
                        >
                          <BsJournalText className="fs-4 me-4" />
                          NOF-Practice E-books
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/result-and-report"
                        >
                          {/* <RiPieChart2Line /> */}
                          <AiOutlinePieChart className="fs-4 me-4" />
                          Results and Reports
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/activity-logs"
                        >
                          <GrDocumentPerformance className="fs-4 me-4" />
                          Activity Logs
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/faqs"
                        >
                          <FaQuestion className="fs-4 me-4" />
                          FAQs
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/olympiad-syllabus"
                        >
                          <MdListAlt className="fs-4 me-4" />
                          Olympiads Syllabus
                        </Link>
                        <Link
                          role="button"
                          className="nav-link dashboard-links"
                          tabIndex={0}
                          to="/account-setting"
                        >
                          <IoSettingsOutline className="fs-4 me-4" />
                          Account Settings
                        </Link>
                        {/* <Link
                        role="button"
                        className="nav-link dashboard-links"
                        tabIndex={0}
                        to="/signup"
                      >
                        <FaRegPlusSquare className="fs-4 me-4" /> Add New
                        Student
                      </Link> */}
                        {/*  */}
                        <Link
                          className="nav-link dashboard-links nav-dashboard-logout "
                          onClick={setSmShow1}
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
                      <Link className="dropdown-item" role="button" to="/login">
                        Switch User
                      </Link>
                      <Link className="dropdown-item" role="button" to="/">
                        Go to Home page
                      </Link>
                      <Link
                        className="dropdown-item"
                        role="button"
                        onClick={handleLogOut}
                      >
                        LogOut
                      </Link>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                {/* </Scrollbars> */}
                <Modal
                  size="sm"
                  show={smShow1}
                  onHide={() => setSmShow1(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                  centered
                >
                  <Modal.Header closeButton className="border-bottom-0 m-1 p-0">
                    <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="">
                    <div className="fs-3 d-flex pb-4 text-center">
                      Are you sure ?
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                      <Button onClick={()=>setSmShow1(false)} className="px-4">Cancel</Button>
                      <Button variant="danger" onClick={handleLogOut} className="px-4">Logout</Button>
                    </div>
                  </Modal.Body>
                </Modal>
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

export default NavbarDashboard;
