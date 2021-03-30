import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export const CartStatus = () => {
  const { totalPrice, cartCount } = useShoppingCart();
  return (
    <div>
      <div>cart status</div>
      <div>Total Price: {totalPrice}</div>
      <div>Count: {cartCount}</div>
    </div>
  );
};
