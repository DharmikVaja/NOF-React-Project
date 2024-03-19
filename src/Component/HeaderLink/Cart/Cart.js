import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = ({ cart, cartItem }) => {
  const [CART, setCART] = useState([]);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const storedCart = JSON.parse(localStorage.getItem("cartList"));
  useEffect(() => {
    if (storedCart) {
      setCART(storedCart);
    }
  }, []);
  const removeFromCart = (itemId) => {
    localStorage.removeItem("cartList")
  };

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
                        {cart.map((cartItem, cartindex) => (
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
                              <Link className="cursorPointerClass">
                                <TiDeleteOutline
                                  className="fs-2"
                                  color="#AC0606"
                                  onClick={removeFromCart}
                                />
                              </Link>
                            </td>
                          </tr>
                        ))}
                        <div></div>
                      </tbody>
                    </table>
                    <div className="card-detail">
                      {/* <BsCartXFill  onClick={() => removeFullCart}/> */}
                      {/* <div className="cart-coupon-container col-lg-12 col-md-12">
                        <input
                          placeholder="Enter Coupon Code"
                          type="text"
                          className="cart-from-control form-control "
                        />
                        <div>
                          <Button
                            variant="primary"
                            type="submit"
                            className="cart-btn btn btn-lg btn-primary"
                            onClick={handleShow1}
                          >
                            Apply Coupon
                          </Button>
                          <img src={CouponImg} alt="Coupon" />
                        </div>
                        <Modal
                          show={show1}
                          onHide={handleClose1}
                          backdrop="static"
                          keyboard={false}
                          aria-labelledby="contained-modal-title-vcenter"
                          className=""
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Invalid Coupon code</Modal.Title>
                          </Modal.Header>
                        </Modal>
                      </div> */}
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
                      <tr>
                        <td>Price</td>
                        <td>₹&nbsp;0</td>
                        <td>₹&nbsp;00.00</td>
                        <td>₹&nbsp;00.00</td>
                        <td>₹&nbsp;0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="error-msg"></p>
                <div className="order-btn  ">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-primary place-order-button"
                    onClick={handleShow2}
                  >
                    Place Order
                  </Button>
                  <Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Body
                      className="d-flex justify-content-center"
                      closeButton
                    >
                      Please contact with our team
                    </Modal.Body>
                    <div className="d-flex justify-content-center gap-3 mb-3">
                      <Link to="/contact">
                        <Button
                          variant="primary"
                          className="new-yellow-btn  w-20"
                        >
                          Continue
                        </Button>
                      </Link>
                      <Button
                        variant="secondary"
                        className="new-yellow-btn  w-20"
                        onClick={handleClose2}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Modal>
                </div>
                <div className="back-to-product responsive-end px-4 py-2">
                  <Link to="/product" className="cursorPointerClass">
                    Back to product
                  </Link>
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
