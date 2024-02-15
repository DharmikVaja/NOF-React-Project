import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="copy-bg1 ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <ul className="link-list d-flex align-items-center">
                <li>
                  <a href="/privacy-policy" target="_blank">
                    Privacy Policy
                  </a>
                </li>
                |
                <li>
                  <a href="/terms-of-service" target="_blank">
                    Terms Of Service
                  </a>
                </li>
                |
                <li>
                  <a href="/disclaimer" target="_blank">
                    Disclaimer
                  </a>
                </li>
                |
                <li>
                  <a href="/refund-and-cancellation" target="_blank">
                    Refund &amp; Cancellation
                  </a>
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
