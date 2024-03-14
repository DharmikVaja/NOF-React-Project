import React, { useRef, useState } from "react";
import "./product.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Button } from "react-bootstrap";

const ProductList = ({ product, addToCart }) => {
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

  const scrollToCart = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SClass = localStorage.getItem("selectedClass:");

  const isProductLiked = (productId) => likedProducts.includes(productId);

  const toggleWishlist = (productId) => {
    setLikedProducts((prev) =>
      isProductLiked(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
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
