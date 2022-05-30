import React from "react";
import "./ProductSecreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsDetails } from "../redux/actions/ProductAction";
import { addToCart } from "../redux/actions/CartAction";
function ProductSecreen({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const ProductsDetails = useSelector((state) => state.listProductsDetails);
  const { loading, error, product } = listProductsDetails;
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(listProductsDetails(match.params.id));
    }
  }, [dispatch, product, match]);
  return (
    <div className="productSecreen">
      {loading?<h2>loading...</h2>}
      <div className="productSecreen-left">
        <div className="left-image">
          <img
            src="https://www.fait-maison.com/img/_1501782567_51.jpg"
            alt="pruct name"
          />
        </div>
        <div className="left-info">
          <p className="left-name">astronomy</p>
          <p className="left-name">price:$25.00dt</p>
          <p>blaaablaaaaaaaaa</p>
        </div>
      </div>

      <div className="productSecreen-right">
        <div className="right-info"></div>
        <p>
          price <span>25.500dt</span>
        </p>
        <p>
          status : <span>In Stock</span>
        </p>
        <p>
          Qty{" "}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
        <p>
          <button type="button">Add to Cart</button>
        </p>
      </div>
    </div>
  );
}

export default ProductSecreen;
