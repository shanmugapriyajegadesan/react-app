import products from "../Data/Products";
import { useNavigate } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = ({ searchQuery }) => {
  const navigate = useNavigate();

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h2>Search results for "{searchQuery}"</h2>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
