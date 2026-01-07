import categoryData from "./index";

const Products = Object.values(categoryData).flatMap(
  (category) => category.slice(0, 3)
);

export default Products;
