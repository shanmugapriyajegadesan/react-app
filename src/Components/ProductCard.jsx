import React, { useState } from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";

const BASE_URL = "http://127.0.0.1:8000";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  // ✅ Safe defaults
  const unitOptions = item.unitOptions?.length ? item.unitOptions : ["1 pc"];
  const originalPrice = item.originalPrice || item.price;
  const offer = item.offer || null;

  const [selectedUnit, setSelectedUnit] = useState(unitOptions[0]);

  // 🔁 unit → value
  const getUnitValue = (unit) => {
    if (!unit) return 1;
    if (unit.includes("kg")) return parseInt(unit) * 1000;
    if (unit.includes("g")) return parseInt(unit);
    if (unit.includes("pc")) return parseInt(unit);
    return 1;
  };

  const baseValue = getUnitValue(unitOptions[0]);
  const selectedValue = getUnitValue(selectedUnit);

  const finalPrice = (selectedValue / baseValue) * item.price;
  const finalOriginalPrice =
    (selectedValue / baseValue) * originalPrice;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: `${item.id}-${selectedUnit}`,
        productId: item.id,
        name: item.name,
        image: imageSrc,
        unit: selectedUnit,
        price: finalPrice,
        originalPrice: finalOriginalPrice,
      })
    );
    toast.success("Added to cart 🛒");
  };

  const imageSrc = item.image
  ? item.image.startsWith("http")
    ? item.image                          
    : item.image.startsWith("/media")
      ? `${BASE_URL}${item.image}`        
      : item.image                        
  : "/placeholder.png";


  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img
          src={imageSrc}
          alt={item.name}
          onError={(e) => {
            e.target.src = "/placeholder.png";
          }}
        />
      </div>

      {offer && <span className="offer-tag">{offer}</span>}

      <h3 className="product-name">{item.name}</h3>

      {/* 🔽 Unit selector */}
      <div className="unit-bar">
        {unitOptions.map((unit) => (
          <button
            key={unit}
            className={unit === selectedUnit ? "unit active" : "unit"}
            onClick={() => setSelectedUnit(unit)}
          >
            {unit}
          </button>
        ))}
      </div>

      {/* 💰 Price */}
      <div className="price">
        <span className="old">₹{finalOriginalPrice.toFixed(0)}</span>
        <span className="new">₹{finalPrice.toFixed(0)}</span>
      </div>

      <button className="add-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
