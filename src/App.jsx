import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Routes>
        {/* Pass onAddToCart to Home */}
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Product onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
