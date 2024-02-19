import React from "react";
import logoImg from "../../assets/logo.png";
import "./header.css";
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/cart.png";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="homeHeader ">
        <div className="container ">
          <div className="row">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom sticky-top">
              <div className="col-md-3 mb-2 mb-md-0">
                <span className="navbar-brand" href="/">
                  <img src={logoImg} className="logoImg" alt="logo" />
                </span>
              </div>

              <div className="col-md-7 d-flex justify-content-end align-items-center">
                <div className="me-3">
                  <Link role="button" className="cart-wl-btn" to="/wishlist">
                    <img src={wishlist} alt="wishlist" className="wl-cart-img" />
                    Wishlist
                  </Link>
                </div>
                <div className="position-relative me-3">
                  <Link role="button" className="show-number cart-wl-btn" to="/cart">
                  <div class="show1"> 0</div>
                    <img src={cart} alt="cart" className="wl-cart-img" />
                    
                    View Cart
                  </Link>
                </div>
              </div>

              <div className="col-md-2 text-md-end  d-md-flex">
                <button type="button" className="login-btn">
                  Login
                </button>
                <button type="button" className="sign-up btn">
                  Signup
                </button>
              </div>

              
            </header>
          </div>
        </div>
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
                  <Link to="/" className="nav-link listNames">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/how-it-works" className="nav-link listNames">
                    How it works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/reports-and-analysis"
                    className="nav-link listNames"
                  >
                    Reports & Analysis
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/syllabus" className="nav-link listNames">
                    Syllabus
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/downloads" className="nav-link listNames">
                    Downloads
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link listNames">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
