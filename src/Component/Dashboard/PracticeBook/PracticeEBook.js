import React, { useState } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "../dashboard.css";
import "./practiceEBook.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import productData from "../../Product/productData";

const PracticeEBook = () => {
  const SClass = localStorage.getItem("selectedClass:");
  const [isAdded, setIsAdded] = useState(false);

  const handleCartProduct = (productId) => {
    setIsAdded((prevAddedToCart) => ({
      ...prevAddedToCart,
      [productId]: true,
    }));
    console.log("cart is added", productId);
  };
  const addedItemCount = Object.keys(isAdded).length;
  // const navigate = useNavigate();
  // const handleGotoCart = () => {
  //   navigate("/order-summary");
  // };

  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          <section className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="view-all-link pad-set register-border">
                  <div className="head-for-all-page">
                    <img
                      src="assets/img/exam-icon.png"
                      className="head-icon"
                      alt=""
                    />
                    <div>
                      <h3>NOF Practice book</h3>
                      <p>
                        You can see your Practice books or E-books here here
                      </p>
                    </div>
                  </div>
                  <Link className="common-btn show-number" to="/order-summary">
                    <span className="show1 right">{addedItemCount || 0}</span>
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className=" pad-set">
              <div className="row">
                <div className=" set-student-btn">
                  <button className="select-student-btn">Subject</button>
                  <button className="select-student-btn">E-Books</button>
                </div>
              </div>
              <div className="row">
                {/*  */}
                {productData.map((product) => {
                  const { id, name, img, amount } = product;
                  const isProductAdded = isAdded[id] || false;
                  return (
                    <div className="col-md-4" key={id}>
                      <div className="test-box-inner">
                        <img src={img} alt="" />
                        <h4>{name}</h4>
                        <div className="d-flex gap-5 justify-content-between">
                          <p> {SClass}</p>
                          <p>Price : ₹&nbsp; {amount}</p>
                        </div>
                        <button
                          className="addtocartbtn"
                          onClick={() => handleCartProduct(id)}
                        >
                          {isProductAdded ? (
                            <Link
                              to="/order-summary "
                              className="go_to_cart_Link text-white"
                            >
                              {"Go to Cart"}
                            </Link>
                          ) : (
                            " Add to Cart"
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
                {/*  */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PracticeEBook;
