import React from "react";
import "./Home.css";
import Product from "./Product"; // Import Product component

const Home = ({ onAddToCart }) => {
  return (
    <div>
      <div className="banner">
        <div
          style={{ width: "60%", height: "90%" }}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <h1>
            <span style={{ color: "#F34C24", fontSize: "1.2em" }}>W</span>elcome
            to Our E-Commerce Store
          </h1>
        </div>
      </div>
      
      {/* Show products on the home page */}
      <div className="container mt-4">
        <Product onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default Home;
