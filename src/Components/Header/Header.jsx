import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate("/search");
    }
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button className="search-icon" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Header;
