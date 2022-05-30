import React, {useState, useEffect} from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="cart">
      <div className="Cart-img">
        <img
          src="https://www.fait-maison.com/img/_1501782567_51.jpg"
          alt="product name"
        />
      </div>
      <Link to={`/product/${111}`} className="cart-name">
        <p>Product1</p>
      </Link>
      <p className="cart-price">$25.000dt</p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cart-deletebn">
        <i className="fa-trash"></i>
      </button>
    </div>
  );
};

export default Cart;
