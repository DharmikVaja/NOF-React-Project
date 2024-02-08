import React from "react";
import logoImg from "../../assets/logo.png";

import { BsBagHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div>
        <div className="container ">
          <div className="row">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <div className="col-md-3 mb-2 mb-md-0">
                <a href="/">
                  <img src={logoImg} className="img-fluid" alt="NOF image" />
                </a>
              </div>

              <div class="d-flex justify-content-end header-side align-items-center">
                <a role="button" class="nav-link" tabindex="0" href="#">
                  <BsBagHeartFill />
                  <span> Wishlist</span>
                </a>
                <button type="button" class="btn position-relative">
                  <FaCartPlus />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0<span class="visually-hidden">unread messages</span>
                  </span>
                </button>
                <span>View Cart</span>
              </div>

              <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">
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
