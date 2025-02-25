import { useState } from "react";

type Props = {
  onFilter: (category: string) => void;
};

const CategoryFilter = ({ onFilter }: Props) => {
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (category) {
      onFilter(category);
    }
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="jewelery">Jewelry</option>
      </select>
      <button onClick={handleSubmit}>Filter</button>
    </div>
  );
};

export default CategoryFilter;
