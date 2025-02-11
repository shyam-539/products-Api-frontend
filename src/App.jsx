import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 ">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto p-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                {/* Conditionally render Cart Button */}
                {isAuthenticated && (
                  <li className="nav-item justify-content-end">
                    <Link className="nav-link" to="/cart">
                      Cart
                    </Link>
                  </li>
                )}
              </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Protected Route */}
          <Route
            path="/product"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Product onAddToCart={handleAddToCart} />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
