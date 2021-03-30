import React from "react";

export const Product = ({ product }) => {
  console.log(product.image);
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "5px",
        margin: "20px",
        padding: "10px",
      }}
    >
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div>
        <img width='150px' src={product.image} />
      </div>
      <button
        onClick={() => {
          alert("clciked");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};
