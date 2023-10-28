import React from "react";
import "./CartProduct.css";

const CartProduct = ({ product, onRemoveFromCart }) => {
  const handleRemoveClick = () => {
    onRemoveFromCart(product.title);
  };

  return (
    <div className="cart-product">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="cart-product-image"
      />
      <div className="cart-product-details">
        <h3>{product.title}</h3>
        <p>{`Price: Rp${product.price.toLocaleString()}`}</p>
        <p>{`Quantity: ${product.quantity}`}</p>
      </div>
      <div className="cart-product-actions">
        <button onClick={handleRemoveClick}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartProduct;
