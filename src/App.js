import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import product1Image from "./Components/Assets/product1.jpg";
import product2Image from "./Components/Assets/product2.jpg";
import product3Image from "../src/Components/Assets/product3.jpg";
import product4Image from "../src/Components/Assets/product4.jpg";
import product5Image from "../src/Components/Assets/product5.jpg";
import product6Image from "../src/Components/Assets/product6.jpg";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([
    {
      title: "Varsity",
      description: "Varsity Hijau Putih",
      price: 9.99,
      imageSrc: product1Image,
    },
    {
      title: "Iphone",
      description: "Iphone 14 PRO MAX",
      price: 19.99,
      imageSrc: product2Image,
    },
    {
      title: "Air Jordan",
      description: "Retro High OG Men's",
      price: 49.99,
      imageSrc: product3Image,
    },
    {
      title: "Air Jordan",
      description: "1 Mid SE",
      price: 14.99,
      imageSrc: product4Image,
    },
    {
      title: "Jeans",
      description: " Jeans MOM Fit",
      price: 29.99,
      imageSrc: product5Image,
    },
    {
      title: "Hoodie",
      description: "hoodie Roughneck Hijau",
      price: 59.99,
      imageSrc: product6Image,
    },
  ]);

  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const removeProduct = (title) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.title !== title)
    );
  };

  const addToCart = (product) => {
    const existingProductIndex = cartProducts.findIndex(
      (p) => p.title === product.title
    );

    if (existingProductIndex !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProductIndex].quantity += 1;
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (title) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.title !== title)
    );
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                addProduct={addProduct}
                removeProduct={removeProduct}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartProducts={cartProducts}
                onRemoveFromCart={removeFromCart}
              />
            }
          />
        </Routes>
        <Link to="/cart" className="cart-icon">
          CART
        </Link>
      </div>
    </Router>
  );
};

export default App;
