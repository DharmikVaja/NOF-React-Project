import React from "react";
import Header from "../../Header/Header";
import CouponImg from "../../../assets/cart-coupon.png";
import "./cart.css";

const Cart = () => {
  const invalidCoupon = () => {
    alert("Sorry! Invalid Coupon Entered!");
  };
  return (
    <div>
      <div className="set-top-margin-all"></div>
      <Header />
      <div className="container spacer-y">
        <div className="row">
          <div className="cart">
            <h3>Cart</h3>
            <span></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 md-10">
                <div className="cart-table">
                  <div className="table-responsive">
                    <div className="card mb-4 rounded-3 cart-shadow">
                      <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">
                          <ul className="cart-list">
                            <li>Product </li>
                            <li>Class</li>
                            <li>Quantity </li>
                            <li>Price</li>
                          </ul>
                        </h4>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title ">Cart is Empty</h3>
                        <div className="card-detail">
                          <h5 className="card-coupon">Coupon</h5>
                          <div className="cart-coupon-container col-lg-8">
                            <input
                              placeholder="Enter Coupon Code"
                              type="text"
                              className="cart-from-control form-control"
                            />
                            <button
                              type="button"
                              className="cart-btn btn btn-lg btn-primary"
                              onClick={invalidCoupon}
                            >
                              Apply Coupon
                            </button>
                            <img src={CouponImg} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-items-end row">
            <div className="col-md-12">
              <div className="cart2-table cart2-total">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Cart total </th>
                        <th>Subtotal</th>
                        <th>Shipping</th>
                        <th>GST &amp; Fees</th>
                        <th>
                          <b>Total amount</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="table">
                      <td>Price</td>
                      <td>$&nbsp;0</td>
                      <td>$&nbsp;00.00</td>
                      <td>$&nbsp;00.00</td>
                      <td>$&nbsp;0</td>
                    </tbody>
                  </table>
                </div>
                <p className="error-msg"></p>
                <div className="order-btn justify-content-center  ">
                  <button
                    type="submit"
                    class="btn btn-primary place-order-button"
                  >
                    Place Order
                  </button>
                </div>
                <div class="back-to-product responsive-end px-4 py-2">
                  <a class="cursorPointerClass">Back to product</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
