import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";

const VariousRoutes = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products productItems={productItems} />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </div>
  );
};

export default VariousRoutes;
