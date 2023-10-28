import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Product from "../Components/Product/Product";
import "./CartPage.css";

const CartPage = ({ cartProducts, onRemoveFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Cart cartProducts={cartProducts} onRemoveFromCart={onRemoveFromCart} />
      <Link to="/" className="bth">
        Back to Home
      </Link>
    </div>
  );
};

export default CartPage;
