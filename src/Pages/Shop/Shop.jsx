import { useState } from "react";
import AllProduct from "../../Components/AllProduct/AllProduct";
import Categories from "../../Components/ShopByCategory/Categories";
import Container from "../../Utilities/Container";

const Shop = () => {
  const [categoryName, setCategoryName] = useState("allProduct");

  const filterSearch = (category) => {
    setCategoryName(category);
  };

  return (
    <>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-2 mt-7 ">
            <Categories filterSearch={filterSearch}></Categories>
          </div>
          <div className="md:col-span-10">
            <AllProduct categoryName={categoryName}></AllProduct>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Shop;
