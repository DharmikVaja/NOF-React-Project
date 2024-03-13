import React, { useState } from "react";
import "./product.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Button } from "react-bootstrap";
// import AnchorLink from "react-anchor-link-smooth-scroll";

const ProductList = ({ product, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState({});
  const [likedProducts, setLikedProducts] = useState([]);

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (addedToCart[product.id]) {
    } else {
      setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
      addToCart(product);
    }
  };

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
