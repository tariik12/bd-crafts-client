import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    "allProduct",
    "Textile",
    "Pottery",
    "Woodworking",
    "Jewelry",
    "PaperCrafts",
    "Glass",
    "Metal",
    "Leather",
    "CandleMaking",
    "BambooCrafts",
  ];

  return (
    <>
      <div className="flex flex-col items-start justify-center overflow-x-auto md:fixed">
        <h1 className="text-xl font-semibold">Product Category</h1>
        {categories.map((item, i) => (
          <Link
            key={i}
            to={`/shop/${item}`}
            className="hover:text-blue-600 my-2 cursor-pointer capitalize"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
