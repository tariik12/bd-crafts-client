import { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../../../public/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="pt-24 flex flex-row items-center justify-center overflow-x-auto">
        {categories.map((item, i) => (
          <CategoryBox
            name={item.name}
            subCategory={item.subcategory}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
