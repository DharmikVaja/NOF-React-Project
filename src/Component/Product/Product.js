import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./product.css";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop";
import SubmitForm from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import ProductList from "./ProductList";
import Cart from "../HeaderLink/Cart/Cart";

const Product = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (data) => {
    // console.log(data)
    setCart([...cart,{...data, quantity:1}])
  };

  return (
    <div>
      <div className="set-top-margin-all"></div>
      <Header count={cart.length} />
      <ScrollToTop />
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
                <p>Country - {}</p>
                <p>Class - {}</p>
              </div>
            </div>
            <div className="text-end col-lg-6 col-md-6 col-sm-6 col-12">
              <button
                className="common-btn"
              >
                Clear filter
              </button>
            </div>
          </div>
          <section className="olympiad-section">
            <div className="container">
              <div className="row">
                  <ProductList product={Product} addToCart={addToCart}/>
                  {/* <Cart cart={cart}/> */}
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
