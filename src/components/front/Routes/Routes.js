import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";

const VariousRoutes = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products productItems={productItems} />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </div>
  );
};

export default VariousRoutes;
