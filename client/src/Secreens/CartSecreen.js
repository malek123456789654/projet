import React from "react";

import "./CartSecreen.css";
import Cart from "../Components/Cart";
const CartSecreen = () => {
  return (
    <div className="cartsecreen">
      <div className="cartsecreen-left">
        <h2>shopping cart</h2>
        <Cart />
      </div>
      <div className="cartscreen-right">
        <div className="cartscreen-info">
          <p>subtotal(0)items</p>
          <p>$25.000dt</p>
        </div>
        <div>
          <button>proceed to chekout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSecreen;
