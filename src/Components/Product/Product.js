import React from "react";
import "./Product.css";

const Product = ({
  title,
  description,
  price,
  imageSrc,
  imageFile,
  onRemoveProduct,
  onAddToCart,
}) => {
  const handleRemoveClick = () => {
    onRemoveProduct(title);
  };

  const handleAddToCartClick = () => {
    if (onAddToCart) {
      const productToAdd = { title, description, price, imageSrc, imageFile };
      onAddToCart(productToAdd);
    }
  };

  return (
    <div className="product">
      <img
        src={imageFile ? URL.createObjectURL(imageFile) : imageSrc}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{`Price: Rp${price.toLocaleString()}`}</p>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default Product;
