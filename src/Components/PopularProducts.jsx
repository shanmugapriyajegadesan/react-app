import React from "react";
import popularProducts from "../Data/Products";
import ProductCard from "./ProductCard";
import "./PopularProducts.css"
const PopularProducts = () => {
  return (
    <section className="popular-section">
      <h2>Popular Products</h2>

      <div className="popular-grid">
        {popularProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
