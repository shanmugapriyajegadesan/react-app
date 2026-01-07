import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        cursor: "pointer",
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default CategoryCard;
