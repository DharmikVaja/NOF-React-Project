import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "../dashboard.css";
import "./practiceEBook.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const PracticeEBook = () => {
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          <section className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="view-all-link pad-set register-border">
                  <div className="head-for-all-page">
                    <img
                      src="assets/img/exam-icon.png"
                      className="head-icon"
                      alt=""
                    />
                    <div>
                      <h3>NOF Practice book</h3>
                      <p>
                        You can see your Practice books or E-books here here
                      </p>
                    </div>
                  </div>
                  <Link className="common-btn show-number" to="/order-summary">
                    <span className="show1 right">0</span>View Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className=" pad-set">
              <div className="row">
                <div className=" set-student-btn">
                  <button className="select-student-btn">Subject</button>
                  <button className="select-student-btn">E-Books</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691577031378test4.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International GK Olympiad</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtndisable" disabled="">
                      Already paid
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691576833344test1.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International Math Olympiad</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtndisable" disabled="">
                      Already paid
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691575296724test6.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International Science Olympiad</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtndisable" disabled="">
                      Already paid
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691577164831test5.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International French Olympiad</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtn">Add to cart</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691576685498test5.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>MTSE-English</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtn">Add to cart</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691576685498test5.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>MTSE-Hindi</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtn">Add to cart</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691574669762test3.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International Hindi Olympiad</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtn">Add to cart</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691577031378test4.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International Aptitude Olympiad</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtn">Add to cart</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691575714423test2.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>International English Olympiad</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtn">Add to cart</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="test-box-inner">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691576685498test5.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h4>MTSE-Marathi</h4>
                    <div className="d-flex gap-5 justify-content-between">
                      <p>CLASS 8</p>
                      <p>Price : $&nbsp; 10</p>
                    </div>
                    <button className="addtocartbtn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PracticeEBook;
