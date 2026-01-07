import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/new-arrivals/")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <p>No Items Found.</p>;
  }

  return (
    <div className="products-grid">
      {products.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewArrivals;
