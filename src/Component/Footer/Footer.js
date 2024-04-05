import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="copy-bg1 ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <ul className="link-list d-flex flex-wrap align-items-center container-fluid">
                <li>
                  <Link to="/privacy-policy" className="">
                    Privacy Policy
                  </Link>
                </li>
                |
                <li>
                  <Link to="/terms-of-service" className="">
                    Terms Of Service 
                  </Link>
                </li>
                |
                <li>
                  <Link to="/disclaimer" className="">
                    Disclaimer
                  </Link>
                </li>
                |
                <li>
                  <Link to="/refund-and-cancellation" className="">
                    Refund &amp; Cancellation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="content">
                  <p className="copyright-text">
                    © NOF Edtech Private Limited 2023-2024. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;