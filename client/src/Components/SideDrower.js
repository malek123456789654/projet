import React, {useState, useEffect} from "react";
import "./SideDrower.css";
import { Link } from "react-router-dom";
const SideDrower = ({ show, click }) => {
  const SideDrowerClass = ["sideDrower"];
  if (show) {
    SideDrowerClass.push("show");
  }
  return (
    <div className={SideDrowerClass.join("")}>
      <ul className="sidedrower-links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              cart
              <span className="sideDrower-cartbage">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrower;
