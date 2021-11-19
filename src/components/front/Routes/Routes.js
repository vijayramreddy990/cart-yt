import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";

const VariousRoutes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/signup" exact element={<Signup />} />
        <Route
          path="/cart"
          exact
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default VariousRoutes;
