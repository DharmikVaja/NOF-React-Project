import React, { useState } from "react";
import "./product.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const ProductList = ({ product, addToCart}) => {
  const [addedToCart, setAddedToCart] = useState({});
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (addedToCart[product.id]) {
      navigate("/cart");
    } else {
      setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
      addToCart(product);
    }
  };

  return (
    <>
      {product.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-4">
          <div className="olympiad-box">
            <div className="olympiad-img">
              <img
                src={product.img}
                className="img-fluid w-auto list-img"
                alt={product.name}
              />
              <div className="olympiad-heart-icon">
                <Link className="" to="/product">
                  <FaHeart />
                </Link>
              </div>
            </div>
            <div className="olympiad-info">
              <h2 className="cursorPointerClass">{product.name}</h2>
              {/* <span>CLASS: {product.class}</span> */}
              <p className="olympiad-amount">₹ &nbsp;{product.amount}</p>
              <Button
                className="olympiad-cart cursorPointerClass"
                onClick={() => handleAddToCart(product)}
              >
                {addedToCart[product.id] ? "Go To Cart" : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
