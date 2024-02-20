import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Header from "../Header/Header";
import ProImg1 from "../../../src/assets/product/pro1.png";
import ProImg2 from "../../../src/assets/product/pro2.png";
import ProImg3 from "../../../src/assets/product/pro3.png";
import ProImg4 from "../../../src/assets/product/pro4.png";
import ProImg5 from "../../../src/assets/product/pro5.png";
import "./product.css";
import { FaHeart } from "react-icons/fa";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop"
import SubmitForm from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

const Product = (props) => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate)
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  //   const onPointerMove = (value, index) => console.log(value, index)
  //   const handleReset = () => {
  //     // Set the initial value
  //     setRating(0)
  //   }
  return (
    <div>
      <div className="set-top-margin-all"></div>
      <Header />
      <ScrollToTop/>
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
                <p>Country - {props.country}</p>
                <p>Class - {props.class}</p>
              </div>
            </div>
            <div className="text-end col-lg-6 col-md-6 col-sm-6 col-12">
              <button className="common-btn">Clear filter</button>
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
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg1}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                        //   onPointerEnter={onPointerEnter}
                        //   onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg2}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg3}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg4}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg5}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg3}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg2}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg4}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg5}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="olympiad-box">
                    <div className="olympiad-img">
                      <img
                        src={ProImg4}
                        className="img-fluid list-img"
                        alt="img"
                      />
                      <div className="olympiad-heart-icon">
                        <a className="cursorPointerClass" href="/product">
                          <FaHeart />
                          {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="olympiad-info">
                      <h2 className="cursorPointerClass">
                        International Junior Science Olympiad
                      </h2>
                      <span>CLASS: {props.class}</span>
                      <div className="olympiad-rating">
                        <Rating
                          className="olympiad-rating"
                          onClick={handleRating}
                          onPointerEnter={onPointerEnter}
                          onPointerLeave={onPointerLeave}
                          // onPointerMove={onPointerMove}
                          initialValue={rating}
                        />
                      </div>
                      {/* <button onClick={handleReset}>reset</button> */}

                      <p className="olympiad-amount">$ &nbsp;10.00</p>
                      <a
                        className="olympiad-cart cursorPointerClass"
                        href="/product"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </section>
        </div>
      </div>
      <SubmitForm/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default Product;
