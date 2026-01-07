import React from "react";
import { useParams } from "react-router-dom";
import categoryData from "../Data";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  const { categoryId } = useParams();

  const products = categoryData[categoryId]; // 👈 DIRECT ARRAY

  // safety check
  if (!Array.isArray(products)) {
    return <p>No products available</p>;
  }

  return (
    <section className="products-section">
      <h2>{categoryId.toUpperCase()}</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            item={product}   
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
