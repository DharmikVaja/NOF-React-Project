import React, { useState, useEffect } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "./practiceEBook.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png";
import { TiDeleteOutline } from "react-icons/ti";
import PaymentForm from "./PaymentForm";

const OrderSummary = ({ props }) => {
  const [cartList, setCartList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartList")) || {};
    setCartList(storedCart || {});
    let subtotal = 0;
    let totalItems = 0;

    Object.entries(storedCart).forEach(([productId, quantity]) => {
      const product = storedCart[productId];
      if (product) {
        subtotal += product.amount * quantity;
        totalItems += quantity;
      }
    });
    setSubtotal(subtotal);
    setTotalItems(totalItems);
  }, []);

  const SClass = localStorage.getItem("selectedClass:");

  // const storedCart = cartList;

  const quantity = Object.keys(cartList).length;

  const removeFromCart = (productId) => {
    const updatedCart = cartList.filter((product) => product.id !== productId);

    setCartList(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ fontFamily: "Montserrat Alternates, sans-serif" }}>
      <div className="dashboard-layout">
        <div className="inner-dash-bpx">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          <section className="dash-outer-box">
            <div className="pad-set">
              <div className="row">
                <div className="col-md-12">
                  <div className="view-all-link pad-set register-border">
                    <div className="head-for-all-page align-items-center">
                      <img src={AssesmentIcon} className="head-icon" alt="" />
                      <div>
                        <h3>Order Summary</h3>
                        <p>You can order your Practice books here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="pad-set inter-grey-box mt-3 ">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody className=" order-table">
                          <tr>
                            <th className="">Name</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th></th>
                          </tr>
                          {Object.values(cartList).map((product) => (
                            <tr key={product.id} className="">
                              <td className="">{product.name}</td>
                              <td>{quantity / quantity}</td>
                              <td>{product.amount}₹</td>
                              <td>
                                <Link
                                  type="button"
                                  onClick={() => {
                                    removeFromCart(product.id);
                                  }}
                                >
                                  <TiDeleteOutline
                                    className="fs-2"
                                    color="#AC0606"
                                  />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="pad-set mt-3">
                    <h4 className="order-head">Order Summary</h4>
                    <div className="order-table">
                      <span className="line-table" />
                      <table className="table text-start table-order">
                        <tbody className="small-content">
                          <tr>
                            <td>Standard </td>
                            <td className="text-end ">{SClass}</td>
                          </tr>
                          <tr>
                            <td>Total Practice book </td>
                            <td className="text-end ">{quantity}</td>
                          </tr>
                          <tr>
                            <td className="padding-less">Subtotal</td>
                            <td className="text-end ">₹ {quantity * 300}</td>
                          </tr>
                          <tr>
                            <td className="padding-less">Shipping</td>
                            <td className="text-end ">00</td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid lightGray",
                              width: "135%",
                            }}
                          />
                          <tr className="order-total">
                            <td>Total Amount</td>
                            <td className="text-end">₹ {quantity * 300}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="text-center mt-5 d-flex justify-content-between">
                        <Link
                          className="common-all-btn text-center"
                          to="/practice-books"
                        >
                          Back
                        </Link>
                        <Link
                          className="common-all-btn text-center"
                          // to="/order-summary"
                          // onClick={<PaymentForm/>}
                        >
                          Next
                        </Link>
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
  );
};

export default OrderSummary;
