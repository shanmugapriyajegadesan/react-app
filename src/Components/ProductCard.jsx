import React, { useState } from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const unitOptions = item.unitOptions?.length ? item.unitOptions : ["1 pc"];
  const originalPrice = item.originalPrice || item.price;
  const offer = item.offer || null;

  const [selectedUnit, setSelectedUnit] = useState(unitOptions[0]);
  const [imageSrc, setImageSrc] = useState(item.image);

  const getUnitValue = (unit) => {
    if (!unit) return 1;
    if (unit.includes("kg")) return parseFloat(unit) * 1000;
    if (unit.includes("g")) return parseFloat(unit);
    if (unit.includes("pc")) return parseInt(unit);
    return 1;
  };

  const baseValue = getUnitValue(unitOptions[0]);
  const selectedValue = getUnitValue(selectedUnit);

  const finalPrice = (selectedValue / baseValue) * item.price;
  const finalOriginalPrice = (selectedValue / baseValue) * originalPrice;

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
        qty: 1,
      })
    );
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img
          src={imageSrc}
          alt={item.name}
          className="product-img"
          loading="lazy"
          onError={() => setImageSrc("/placeholder.png")}
        />
      </div>

      {offer && <span className="offer-tag">{offer}</span>}

      <h3 className="product-name">{item.name}</h3>

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
