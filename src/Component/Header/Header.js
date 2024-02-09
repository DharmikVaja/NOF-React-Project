import React from "react";
import logoImg from "../../assets/logo.png";
import styles from "../../header.module.css";
// import { BsBagHeartFill } from "react-icons/bs";
import wishlist from "../../assets/wishlist.png";
// import { FaCartPlus } from "react-icons/fa6";
import cart from "../../assets/cart.png";

const Header = () => {
  return (
    <>
      <div className={styles.homeHeader}>
        <div className="container  ">
          <div className="row ">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom sticky-top ">
              <div className="col-md-3 mb-2 mb-md-0">
                <span className="navbar-brand" href="/">
                  <img src={logoImg} className="logoImg" alt="logo" />
                </span>
              </div>

              <div className="d-flex justify-content-end header-side align-items-center ">
                {/* <a
                  role="button"
                  className="show-number nav-link"
                  tabindex="0"
                  to="#"
                >
                  <div class="show1"> 0</div>
                  <img src={cart} className="img-fluid wish" alt="icon" />
                  <span>View Cart</span>
                </a> */}
                <a role="button" className="nav-link" to="#">
                  <span className="navbar-brand">
                    <img src={wishlist} alt="wishlist" />
                    Wishlist
                  </span>
                </a>
                <a role="button" className="btn position-relative" to="#">
                  <img src={cart} alt="cart" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge bg-danger">
                    0
                  </span>
                  <span>View Cart</span>
                </a>
              </div>

              <div className="col-md-3 text-end ">
                <button type="button" className="btn text-dark me-2 ">
                  Login
                </button>
                <button type="button" className="btn btn-primary ">
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
