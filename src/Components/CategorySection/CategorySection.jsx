import "./CategorySection.css";
import { useNavigate } from "react-router-dom";

import fruitsImg from "../../Assets/fruits.png";
import vegImg from "../../Assets/vegge.png";
import instantimg from "../../Assets/instantfood.jpg";
import rice from "../../Assets/rice.jpg";
import tea from "../../Assets/tea.jpg";

const CategorySection = () => {
  const navigate = useNavigate();

  const goToCategory = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="category-section">
      <div className="category-card" onClick={() => goToCategory("fruits")}>
        <img src={fruitsImg} alt="Fruits" />
        <p>Fruits</p>
      </div>

      <div className="category-card" onClick={() => goToCategory("vegetables")}>
        <img src={vegImg} alt="Vegetables" />
        <p>Vegetables</p>
      </div>

      <div className="category-card" onClick={() => goToCategory("instantfoods")}>
        <img src={instantimg} alt="Instant Foods" />
        <p>Instant Food</p>
      </div>

      <div className="category-card" onClick={() => goToCategory("rice")}>
        <img src={rice} alt="Rice" />
        <p>Rice & Atta</p>
      </div>

      <div className="category-card" onClick={() => goToCategory("tea")}>
        <img src={tea} alt="Tea" />
        <p>Tea, Coffee & Drinks</p>
      </div>
    </div>
  );
};

export default CategorySection;
