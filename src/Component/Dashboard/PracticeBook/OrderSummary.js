import React, { useState, useEffect } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "./practiceEBook.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const OrderSummary = () => {
  const [cartList, setCartList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cartList")) || {};
    setCartList(storedCart || {});
    // console.log("cart-list:", storedCart);

    // Calculate subtotal and total items
    let subtotal = 0;
    let totalItems = 0;

    Object.entries(storedCart).forEach(([productId, quantity]) => {
      const product = storedCart[productId];

      // console.log("productId", productId);
      // console.log("quantity", quantity);
      if (product) {
        subtotal += product.amount * quantity;
        totalItems += quantity;
      }
    });
    setSubtotal(subtotal);
    setTotalItems(totalItems);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = { ...cartList };
    delete updatedCart[productId];
    setCartList(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className="dashboard-layout">
        <div className="inner-dash-bpx">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          <section className="dash-outer-box">
            <div className="pad-set">
              <div className="row">
                <div className="col-md-7">
                  <div className="pad-set inter-grey-box mt-3">
                    <div className="order-table">
                      <table className="table">
                        <tbody className="big-content set-border-pad">
                          {Object.entries(cartList).map(
                            ([productId, quantity]) => {
                              const product = cartList[productId];
                              return (
                                <tr key={productId}>
                                  <td>{product.name}</td>
                                  <td>{quantity}</td>
                                  <td>{product.amount}</td>
                                  <td>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => removeFromCart(productId)}
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                              );
                            }
                          )}
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
                            <td>Total Practice book - {totalItems}</td>
                          </tr>
                          <tr>
                            <td className="padding-less">Subtotal</td>
                            <td className="text-end padding-less">
                              ₹ {subtotal}
                            </td>
                          </tr>
                          <tr>
                            <td className="padding-less">Shipping</td>
                            <td className="text-end padding-less">00</td>
                          </tr>
                          <tr className="order-total">
                            <td>Total Amount</td>
                            <td className="text-end">₹ {subtotal}</td>
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
                          to="/order-summary"
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
