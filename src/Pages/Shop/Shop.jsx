import { Outlet } from "react-router-dom";
import Categories from "../../Components/ShopByCategory/Categories";
import Container from "../../Utilities/Container";

const Shop = () => {
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-2 mt-7 ">
            <Categories></Categories>
          </div>
          <div className="md:col-span-10">
            <Outlet></Outlet>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Shop;
