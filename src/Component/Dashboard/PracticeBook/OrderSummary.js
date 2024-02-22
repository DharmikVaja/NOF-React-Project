import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "./practiceEBook.css"
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div>
      <div>
        <div className="dashboard-layout ">
          <div className="inner-dash-bpx ">
            <header className="main-header login-header-home">
              <NavbarDashboard />
            </header>
            <section className="dash-outer-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-md-flex position-relative justify-content-between align-items-center register-border pad-set">
                    <div className="">
                      <h4 className="same-head-dash">Order Summary</h4>
                      <p className="same-para-dash">
                        You can order your Practice books here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pad-set">
                <div className="row">
                  <div className="col-md-7">
                    <div className="pad-set inter-grey-box mt-3">
                      <div className="order-table">
                        <table className="table">
                          <tbody className="big-content set-border-pad">
                            <tr>
                              <td>
                                <p className="text-center">
                                  Your cart is empty
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="pad-set  mt-3">
                      <h4 className="order-head">Order Summary</h4>
                      <div className="order-table">
                        <span className="line-table" />
                        <table className="table text-start table-order">
                          <tbody className="small-content">
                            <tr>
                              <td>Total Practice book - 0</td>
                            </tr>
                            <tr>
                              <td className="padding-less">Subtotal</td>
                              <td className="text-end padding-less">
                                $&nbsp;0
                              </td>
                            </tr>
                            <tr>
                              <td className="padding-less">Shipping</td>
                              <td className="text-end padding-less">00</td>
                            </tr>
                            <tr className="order-total">
                              <td>Total Amount</td>
                              <td className="text-end">$&nbsp;0</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="text-center mt-5 d-flex justify-content-between">
                          <Link className="common-all-btn text-center" to="/practice-books">Back</Link>
                          <Link className="common-all-btn text-center" to="/order-summary">Next</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
