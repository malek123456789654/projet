import React, {useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
function PrivateRoutes({ children }) {
  const token = localStorage.getItem("token");
  return <div>{token ? children : <Navigate to="/" />}</div>;
}

export default PrivateRoutes;
