import { createSlice } from "@reduxjs/toolkit";

// 🔹 Load cart from localStorage
const loadCart = () => {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
};

// 🔹 Save cart to localStorage
const saveCart = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(), // 👈 IMPORTANT CHANGE
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload.id
      );

      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }

      saveCart(state.items); // 👈 SAVE
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload
      );
      if (item) {
        item.qty += 1;
        saveCart(state.items);
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload
      );
      if (item && item.qty > 1) {
        item.qty -= 1;
        saveCart(state.items);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      saveCart(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems"); // 👈 CLEAR
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
