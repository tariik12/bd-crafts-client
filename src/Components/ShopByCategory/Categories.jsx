const Categories = ({ filterSearch }) => {
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
      <div className="flex flex-col items-start justify-center overflow-x-auto">
        <h1 className="text-xl font-semibold">Product Category</h1>
        {categories.map((item, i) => (
          <p
            key={i}
            onClick={() => filterSearch(item)}
            className="hover:text-blue-600 my-2 cursor-pointer capitalize"
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default Categories;
