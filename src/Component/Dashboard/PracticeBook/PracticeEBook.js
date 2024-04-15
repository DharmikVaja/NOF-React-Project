import React, { useEffect, useState } from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import "../dashboard.css";
import "./practiceEBook.css";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import productData from "../../Product/productData";
import AssesmentIcon from "../../../assets/Dashboard/exam-assesment-icon.png";

const PracticeEBook = () => {
  const [studentCart, setStudentCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (isProductInCart(product.id)) {
      navigate("/order-summary");
    } else {
      setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
      addToCart(product);
    }
  };

  const isProductInCart = (productId) => {
    const storedCart = JSON.parse(localStorage.getItem("cartList")) || [];
    if (!Array.isArray(storedCart)) {
      return false;
    }
    for (const item of storedCart) {
      if (item.id === productId) {
        return true;
      }
    }
    return false;
  };

  const addToCart = (product) => {
    const updatedCart = [...studentCart]; // Create a copy to avoid mutation
    updatedCart.push(product);
    setStudentCart(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartList"));
    if (Array.isArray(storedCart)) {
      setStudentCart(storedCart);
    } else {
      setStudentCart([]);
    }
  }, []);

  const cartItemCount = Object.keys(studentCart).length;

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
                    <img src={AssesmentIcon} className="head-icon" alt="" />
                    <div>
                      <h3>NOF Practice book</h3>
                      <p>
                        You can see your Practice books or E-books here here
                      </p>
                    </div>
                  </div>
                  <Link className="common-btn show-number" to="/order-summary">
                    <span className="show1 right">{cartItemCount || 0}</span>
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
                {/* Product Listing */}
                {productData.map((product) => (
                  <div key={product.id} className="col-md-4">
                    <div className="test-box-inner">
                      <img src={product.img} alt={product.name} />
                      <h4>{product.name}</h4>
                      <div className="d-flex gap-5 justify-content-between">
                        <p>Class: {localStorage.getItem("selectedClass:")}</p>
                        <p>Price : ₹ {product.amount}</p>
                      </div>
                      <button
                        className="addtocartbtn"
                        onClick={() => handleAddToCart(product)}
                      >
                        {isProductInCart(product.id) ? (
                          <Link
                            to="/order-summary"
                            className="go_to_cart_Link text-white"
                          >
                            Go to Cart
                          </Link>
                        ) : (
                          " Add to Cart"
                        )}
                      </button>
                    </div>
                  </div>
                ))}
                {/* Product Listing */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PracticeEBook;
