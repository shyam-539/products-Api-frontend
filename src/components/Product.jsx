import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const Product = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://products-api-backend.onrender.com/products" // ✅ Corrected URL
        );
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      {products.map((product, key) => (
        <Card key={key} style={{ margin: "10px" }}>
          <Card.Img
            variant="top"
            style={{ height: "350px", width: "100%" }}
            src={product.url}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title> {/* ✅ Fixed property */}
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className="text-success">
              Rating: {product.rating}
            </Card.Text>
            <div>
              <strong>Price: ₹{product.price}/-</strong>
            </div>
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Product;
