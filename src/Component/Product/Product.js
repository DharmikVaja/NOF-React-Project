import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./product.css";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop";
import SubmitForm from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import ProductList from "./ProductList";
import Cart from "../HeaderLink/Cart/Cart";
import "../HeaderLink/Cart/cart.css";
import ProImg1 from "../../../src/assets/product/pro1.png";
import ProImg2 from "../../../src/assets/product/pro2.png";
import ProImg3 from "../../../src/assets/product/pro3.png";
import ProImg4 from "../../../src/assets/product/pro4.png";
import ProImg5 from "../../../src/assets/product/pro5.png";
import ProImg6 from "../../../src/assets/product/Pro6.png";
import { useNavigate } from "react-router-dom";

const Product = () => {
  //
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "International Hindi Olympiad",
      class: "7",
      img: ProImg5,
      amount: 300,
    },
    {
      id: 2,
      name: "International Maths Olympiad",
      img: ProImg3,
      class: "7",
      amount: 300,
    },
    {
      id: 3,
      name: "International English Olympiad",
      class: "7",
      img: ProImg2,
      amount: 300,
    },
    {
      id: 4,
      name: "International GK Olympiad",
      class: "7",
      img: ProImg6,
      amount: 300,
    },
    {
      id: 5,
      name: "MTSE- Hindi ",
      class: "7",
      img: ProImg4,
      amount: 300,
    },
    {
      id: 6,
      name: "International Science Olympiad",
      class: "7",
      img: ProImg1,
      amount: 300,
    },
    {
      id: 7,
      name: "International Quiz Olympiad",
      class: "7",
      img: ProImg6,
      amount: 300,
    },
    {
      id: 8,
      name: "International Aptitude Olympiad",
      class: "7",
      img: ProImg3,
      amount: 300,
    },
    {
      id: 9,
      name: "MTSE- English",
      class: "7",
      img: ProImg4,
      amount: 300,
    },
    {
      id: 10,
      name: "MTSE- Marathi",
      class: "7",
      img: ProImg4,
      amount: 300,
    },
  ]);
  //
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    // console.log(data)
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  // console.log(cart);
  const handleShow = (value) => {
    setShowCart(value);
  };
  //

  // const [localCart, setLocalCart] = useState([]);
  const navigate = useNavigate();
  const SCountry = localStorage.getItem("selectedCountry:");
  const SClass = localStorage.getItem("selectedClass:");

  const removeItem = () => {
    // console.log("----")
    localStorage.removeItem("selectedCountry:");
    localStorage.removeItem("selectedClass:");
    navigate("/");
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>
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
                {showCart ? (
                  <Cart cart={cart}></Cart>
                ) : (
                  <ProductList
                    product={product}
                    addToCart={addToCart}
                  ></ProductList>
                )}
                <Cart cart={cart} />
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
