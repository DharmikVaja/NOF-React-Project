import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import "./product.css";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop";
import SubmitForm from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import Cart from "../HeaderLink/Cart/Cart";
import "../HeaderLink/Cart/cart.css";
import productData from "./productData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Button } from "react-bootstrap";

const Product = () => {
  const [CART, setCART] = useState([]);
  const addToCart = (product) => {
    const updatedCart = [...CART];
    const existingIndex = updatedCart.findIndex((p) => p.id === product.id);
    if (existingIndex !== -1) {
      updatedCart[existingIndex].quantity =
        (updatedCart[existingIndex].quantity || 1) + 1;
    } else {
      const newProduct = { ...product }; // Deep copy with spread operator
      updatedCart.push(newProduct);
    }
    setCART(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };
  const navigate = useNavigate();
  const removeItem = () => {
    localStorage.removeItem("selectedCountry:");
    localStorage.removeItem("selectedClass:");
    navigate("/");
  };
  // productList
  const [addedToCart, setAddedToCart] = useState({});
  const [likedProducts, setLikedProducts] = useState([]);
  const targetRef = useRef(null);

  const handleAddToCart = (product) => {
    if (addedToCart[product.id]) {
      scrollToCart();
    } else {
      setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
      addToCart(product);
    }
  };
  const isProductInCart = (productId) => {
    // Check localStorage for cart items
    const storedCart = JSON.parse(localStorage.getItem("cartList"));
    return storedCart && storedCart.some((item) => item.id === productId);
  };

  const scrollToCart = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const SClass = localStorage.getItem("selectedClass:");
  const SCountry = localStorage.getItem("selectedCountry:");
  const isProductLiked = (productId) => likedProducts.includes(productId);
  const toggleWishlist = (productId) => {
    setLikedProducts((prev) =>
      isProductLiked(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  const removeFromCart = (itemId) => {
    const updatedCart = CART.filter((item) => item.id !== itemId);
    setCART(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Header></Header>
      <ScrollToTop />
      <div className="set-top-margin-all"></div>
      <div className="container spacer-y">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="testimonial-heading text-center">
              <h1>NOF International Olympiads and Practice books </h1>
            </div>
          </div>
          <div className="mt-5 margin-mobile-box row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="class-country-heading">
                <p>Country - {SCountry}</p>
                <p>Class - {SClass}</p>
              </div>
            </div>
            <div className="text-end col-lg-6 col-md-6 col-sm-6 col-12">
              <button className="common-btn" onClick={removeItem}>
                Clear filter
              </button>
            </div>
          </div>
          <section className="olympiad-section">
            <div className="container">
              <div className="row">
                {productData.map((product) => (
                  <div key={product.id} className="col-lg-3 col-md-4">
                    <div className="olympiad-box">
                      <div className="olympiad-img">
                        <img
                          src={product.img}
                          className="img-fluid w-auto list-img"
                          alt={product.name}
                        />
                        <div className="olympiad-heart-icon">
                          <Link
                            className=""
                            to="/product"
                            onClick={() => toggleWishlist(product.id)}
                          >
                            {isProductLiked(product.id) ? (
                              <FcLike className="fs-4" />
                            ) : (
                              <FaHeart className="fs-5" />
                            )}
                          </Link>
                        </div>
                      </div>
                      <div className="olympiad-info">
                        <h2 className="cursorPointerClass">{product.name}</h2>
                        <span>CLASS: {SClass}</span>
                        <p className="olympiad-amount">
                          ₹ &nbsp;{product.amount}
                        </p>
                        <div ref={targetRef} />
                        <Button
                          className="olympiad-cart cursorPointerClass"
                          onClick={() => handleAddToCart(product)}
                        >
                          {isProductInCart(product.id)
                            ? "Go To Cart"
                            : "Add to Cart"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Cart
                  cart={CART}
                  ref={targetRef}
                  removeFromCart={removeFromCart}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <SubmitForm />
      <Map />
      <Footer />
    </div>
  );
};

export default Product;
