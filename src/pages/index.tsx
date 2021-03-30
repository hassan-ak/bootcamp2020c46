import React from "react";
import { CartStatus } from "../components/CartStatus";
import { Product } from "../components/Product";

const productData = [
  {
    name: "Water Bottle",
    sku: "price_1HiNkpEncg17e61HdiErZOkH",
    price: 1500,
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6000a6ed-e59b-47ae-b305-64ebade945f0/710ml-tr-hypercharge-twist-water-bottle-Ft4Fgv.jpg",
    currency: "USD",
  },
  {
    name: "Formal Shoe",
    sku: "price_1HiJklEncg17e61HJvgC9VGR",
    price: 3000,
    image: "https://ebhfashion.com/wp-content/uploads/0341-1-054.jpg",
    currency: "USD",
  },
];

export default function Home() {
  return (
    <div>
      <CartStatus />
      <div style={{ margin: "20px" }}>
        {productData.map((product) => (
          <Product key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}
