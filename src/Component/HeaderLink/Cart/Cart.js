import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { TbTrashXFilled } from "react-icons/tb";
import { Button } from "react-bootstrap";

const Cart = ({ cart, cartItem, removeFromCart }) => {
  const [CART, setCART] = useState([]);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartList"));
    setCART(storedCart || []);
  }, [localStorage.getItem("cartList")]);

 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional: Add smooth scrolling behavior
      });
    };

  // const CartLength = localStorage.getItem("cartList")

  return (
    <>
      <div className="set-top-margin-all"></div>
      <Header />
      <div className="container spacer-y cart-comp" id="navtocart">
        <div className="row">
          <div className="cart">
            <h3>Cart</h3>
            <span></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {CART.length > 0 ? (
                  <div className="cart2-table cart2-total">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product </th>
                            <th>Class</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="cart-body">
                          {cart.map((cartItem) => (
                            <tr key={cartItem.id}>
                              <td className="text-left">{cartItem.name}</td>
                              <td className="text-left">{cartItem.class}</td>
                              <td>
                                <div className="quantity-input-group">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn btn-outline-secondary"
                                      disabled
                                    >
                                      <FaMinus />
                                    </button>
                                    <input
                                      type="text"
                                      readOnly
                                      className="form-control cart-quantity-value"
                                      defaultValue={cartItem.quantity || 1}
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-outline-secondary"
                                      disabled
                                    >
                                      <FaPlus />
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td>{cartItem.amount} ₹</td>
                              <td>
                                <Link
                                  onClick={() =>
                                    handleRemoveFromCart(cartItem.id)
                                  }
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
                ) : (
                  <p className="text-center">Your cart is empty.</p>
                )}

                <div className="cart2-table cart2-total">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Cart Total </th>
                          <th>Subtotal</th>
                          <th>Shipping</th>
                          <th>GST & Fees</th>
                          <th className="total-amount ">Total Amount</th>
                        </tr>
                      </thead>
                      <tbody className="cart-body">
                        <tr>
                          <td>Price </td>
                          <td>₹{CART.length * 300} </td>
                          <td>₹ 00.00</td>
                          <td>₹ 00.00</td>
                          <td className="total-amount">₹{CART.length * 300}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-flex justify-content-center w-100">
                      <Link to="/signup">
                        <button className="common-btn place-order">
                          Place Order
                        </button>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-end me-5">
                      <button className="back-to-product bg-transparent text-secondary place-order" onClick={scrollToTop}>
                        Back to Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
