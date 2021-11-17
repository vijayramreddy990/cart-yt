import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";

const VariousRoutes = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products productItems={productItems} />} />
      </Routes>
    </div>
  );
};

export default VariousRoutes;
