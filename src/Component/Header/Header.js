import React from "react";
import logoImg from "../../assets/logo.png";
import "./header.css";
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/cart.png";

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
                  <a role="button" className="nav-link" href="#">
                    <img src={wishlist} alt="wishlist" />
                    Wishlist
                  </a>
                </div>
                <div className="position-relative me-3">
                  <a role="button" className="btn" href="#">
                    <img src={cart} alt="cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge bg-danger">
                      0
                    </span>
                    <span>View Cart</span>
                  </a>
                </div>
              </div>

              <div className="col-md-2 text-md-end d-none d-md-block">
                <button type="button" className="btn text-dark me-2">
                  Login
                </button>
                <button type="button" className="btn btn-primary">
                  Sign-up
                </button>
              </div>

              <div className="col-12 d-md-none mt-3 text-end">
                <button type="button" className="btn text-dark me-2">
                  Login
                </button>
                <button type="button" className="btn btn-primary">
                  Sign-up
                </button>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
