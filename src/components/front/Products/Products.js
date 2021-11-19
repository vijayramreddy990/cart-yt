import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div className="product-name">
            <h3>{productItem.name}</h3>
          </div>
          <div className="product-price">${productItem.price}</div>
          <div>
            <button
              onClick={() => handleAddProduct(productItem)}
              className="product-add-buton"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
