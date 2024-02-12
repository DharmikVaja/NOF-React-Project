import React from "react";
import "../../app.css";
import "../../Form.module.css";
const Form = () => {
  return (
    <>
      <footer class="footer-home-new" id="footer">
        <div className="container-fluid">
          <div className="align-items-center  row">
            <div className=" offset-md-1 offset-0 col-md-3">
              <div className="get-touch-info">
                <h2>National Olympiad Foundation</h2>
                <p>
                  NOF Edtech Private Limited G-1, 108, Saket Nagar Indore,
                  452018 ,Madhya Pradesh
                </p>
                <p>Helpline :</p>
                <p>junior@groupnof.com</p>
                <p>+91 93011 95542</p>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/NOF-Junior-105382224526859/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/nofolympiad" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nofjunior/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCoVgu8YEtOEDZRnHoebokEA"
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.pinterest.com/5855264130ae1e564c13d784250868/"
                      target="_blank"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="offset-md-1 p-0 col-xl-7 col-lg-7 col-md-7"></div>
            <div className="get-touch-bg">
              <h2>Get in touch with us</h2>
              <div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        placeholder="Enter First Name"
                        name="first_name"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        placeholder="Enter Last Name"
                        name="last_name"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <div className=" react-tel-input flag-phone">
                    <div className="special-label">Phone</div>
                    <input
                      className="form-control "
                      placeholder="Phone Number"
                      type="tel"
                      value="+91"
                    />
                    <div className="flag-dropdown ">
                      <div
                        className="selected-flag"
                        title="India: + 91"
                        tabindex="0"
                        role="button"
                        aria-haspopup="listbox"
                      >
                        <div className="flag in">
                          <div className="arrow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    placeholder="Enter Email Address"
                    name="email"
                    type="email"
                    className="form-control"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Comments</label>
                  <textarea
                    rows="4"
                    placeholder="Write something you want to ask.."
                    name="comment"
                    className="form-control"
                  ></textarea>
                </div>
                <p className="error-msg"></p>
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Form;
