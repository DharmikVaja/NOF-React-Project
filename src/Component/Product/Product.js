import React, { useState, useEffect } from "react";
// import { Rating } from "react-simple-star-rating";
import Header from "../Header/Header";
import ProImg1 from "../../../src/assets/product/pro1.png";
// import ProImg2 from "../../../src/assets/product/pro2.png";
// import ProImg3 from "../../../src/assets/product/pro3.png";
// import ProImg4 from "../../../src/assets/product/pro4.png";
// import ProImg5 from "../../../src/assets/product/pro5.png";
import "./product.css";
import { FaHeart } from "react-icons/fa";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop";
import SubmitForm from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BookAPI } from "../../Service/api";
import Cart from "./ProductBookData/Cart";
// import axios from "axios";

const Product = ({ product }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const navigate = useNavigate();
  function clearFilter() {
    localStorage.removeItem("selectedCountry");
    localStorage.removeItem("selectedClass");
    navigate("/");
  }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await BookAPI({}); // Replace with your actual API endpoint
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div className="set-top-margin-all"></div>
      <Header />
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
                <p>Country - {selectedCountry}</p>
                <p>Class - {selectedClass}</p>
              </div>
            </div>
            <div className="text-end col-lg-6 col-md-6 col-sm-6 col-12">
              <button className="common-btn" onClick={clearFilter}>
                Clear filter
              </button>
            </div>
          </div>
          <section className="olympiad-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="nof-same-font">
                    <h3>NOF INTERNATIONAL OLYMPIADS</h3>
                    <span></span>
                  </div>
                  <span></span>
                </div>
              </div>
              <div className="row">
                
                    <div key="1" className="col-lg-3 col-md-4">
                      <div className="olympiad-box">
                        <div className="olympiad-img">
                          <img
                            src={ProImg1}
                            className="img-fluid list-img"
                            alt="img"
                          />
                          <div className="olympiad-heart-icon">
                            <Link className="" to="/product">
                              <FaHeart />
                            </Link>
                          </div>
                        </div>
                        <div className="olympiad-info">
                          <h2 className="cursorPointerClass">
                            International Hindi Olympiad
                          </h2>
                          <span>CLASS: {"7"}</span>
                          <div className="olympiad-rating">
                            {/* You can display book ratings here */}
                          </div>

                          <p className="olympiad-amount">
                            $ &nbsp;{10}
                          </p>
                          <Link
                            className="olympiad-cart cursorPointerClass"
                            to="/cart"
                          >
                            Add To Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                 

                {/*  */}
                <Cart/>
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
