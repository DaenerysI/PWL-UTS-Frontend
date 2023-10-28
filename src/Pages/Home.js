import React from "react";
import Product from "../Components/Product/Product";
import ProductForm from "../Components/Product/ProductForm";
import "../Components/Product/Product.css";
const Home = ({ products, addProduct, removeProduct, addToCart }) => {
  return (
    <div className="product-list">
      <h1 className="list">Product List</h1>
      <ProductForm onAddProduct={addProduct} />
      {products.map((product) => (
        <Product
          key={product.title}
          {...product}
          onRemoveProduct={removeProduct}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Home;
