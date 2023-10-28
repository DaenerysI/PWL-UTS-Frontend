import React from "react";
import CartProduct from "./CartProduct";

const Cart = ({ cartProducts, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartProducts.map((product) => (
        <CartProduct
          key={product.title}
          product={product}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default Cart;
