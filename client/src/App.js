import "./App.css";
import React, {useState, useEffect} from "react";

import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Register from "./Components/Register";

import Home from "./Components/Home";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import Backdrop from "./Components/Backdrop";
import SideDrower from "./Components/SideDrower";
import CartSecreen from "./Secreens/CartSecreen";
import ProductSecreen from "./Secreens/ProductSecreen";

function App() {
  const [sideToggel, setSideToggel] = useState(false);
  return (
    <div className="App">
      <Navigation click={() => setSideToggel(true)} />
      <SideDrower show={sideToggel} click={() => setSideToggel(false)} />
      <Backdrop show={sideToggel} click={() => setSideToggel(false)} />
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route
          path="/Profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
        <Route path="/signin" element={<Login></Login>} />
        <Route path="/signup" element={<Register></Register>} />

        <Route path="/product" element={<ProductSecreen></ProductSecreen>} />
        <Route path="/Cart" element={<CartSecreen></CartSecreen>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
