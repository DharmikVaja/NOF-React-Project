import React from "react";
import ProImg1 from "../../../src/assets/product/pro1.png";
import ProImg2 from "../../../src/assets/product/pro2.png";
import ProImg3 from "../../../src/assets/product/pro3.png";
import ProImg4 from "../../../src/assets/product/pro4.png";
import ProImg5 from "../../../src/assets/product/pro5.png";
import ProImg6 from "../../../src/assets/product/Pro6.png";
import "./product.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const ProductList = ({ product, addToCart }) => {
  const olympiadsData = [
    {
      id: 1,
      name: "International Hindi Olympiad",
      class: "7",
      img: ProImg5,
      amount: 10,
    },
    {
      id: 2,
      name: "International Maths Olympiad",
      img: ProImg3,
      class: "7",
      amount: 10,
    },
    {
      id: 3,
      name: "International English Olympiad",
      class: "7",
      img: ProImg2,
      amount: 10,
    },
    {
      id: 4,
      name: "International GK Olympiad",
      class: "7",
      img: ProImg6,
      amount: 10,
    },
    {
      id: 5,
      name: "MTSE- Hindi ",
      class: "7",
      img: ProImg4,
      amount: 10,
    },
    {
      id: 6,
      name: "International Science Olympiad",
      class: "7",
      img: ProImg1,
      amount: 10,
    },
    {
      id: 7,
      name: "International Quiz Olympiad",
      class: "7",
      img: ProImg6,
      amount: 10,
    },
    {
      id: 8,
      name: "International Aptitude Olympiad",
      class: "7",
      img: ProImg3,
      amount: 10,
    },
    {
      id: 9,
      name: "MTSE- English",
      class: "7",
      img: ProImg4,
      amount: 10,
    },
    {
      id: 10,
      name: "MTSE- Marathi",
      class: "7",
      img: ProImg4,
      amount: 10,
    },
  ];

  return (
    <>
      {olympiadsData.map((olympiad) => (
        <div key={olympiad.id} className="col-lg-3 col-md-4">
          <div className="olympiad-box">
            <div className="olympiad-img">
              <img
                src={olympiad.img}
                className="img-fluid w-auto list-img"
                alt="img"
              />
              <div className="olympiad-heart-icon">
                <Link className="" to="/product">
                  <FaHeart />
                </Link>
              </div>
            </div>
            <div className="olympiad-info">
              <h2 className="cursorPointerClass">{olympiad.name}</h2>
              <span>CLASS: {olympiad.class}</span>
              <div className="olympiad-rating"></div>
              <p className="olympiad-amount">$ &nbsp;{olympiad.amount}</p>
              <Button
                className="olympiad-cart cursorPointerClass"
                onClick={() => addToCart(olympiad)}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
