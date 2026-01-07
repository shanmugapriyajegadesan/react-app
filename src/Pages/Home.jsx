import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import staticProducts from "../Data/Products";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner/Banner";
import CategorySection from "../Components/CategorySection/CategorySection";
import banner1 from "../Assets/exotic banner.jpg";
import banner2 from "../Assets/pothys_strip_banner.jpeg";

const Home = ({ searchQuery = "" }) => {
  const navigate = useNavigate();

  const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => setApiProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const allProducts = [...staticProducts, ...apiProducts];

  const handleCategorySelect = (category) => {
    if (category === "all") navigate("/");
    else navigate(`/products/${category}`);
  };

  const filteredProducts =
    searchQuery.trim() !== ""
      ? allProducts.filter((item) =>
          item.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allProducts;

  return (
    <div className="container">
      <Banner image={banner1} alt="Top Offer Banner" />

      <CategorySection onSelect={handleCategorySelect} />

      <h2 className="popular-section">Popular Products</h2>

      <div className="popular-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={`${item.id}-${item.name}`} item={item} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      <Banner image={banner2} alt="Mid Offer Banner" />
    </div>
  );
};

export default Home;
