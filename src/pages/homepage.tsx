import { useState } from "react";
import { useProducts } from "../hooks/useproducts";
import ProductList from "../components/productlist";
import CategoryFilter from "../components/categoryfilter";

const HomePage = () => {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const { data: products, isLoading, error } = useProducts(category);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div>
      <h1>Products</h1>
      <CategoryFilter onFilter={setCategory} />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
