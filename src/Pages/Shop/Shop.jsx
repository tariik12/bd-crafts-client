import AllProduct from "../../Components/AllProduct/AllProduct";
import Container from "../../Utilities/Container";

const Shop = () => {
  return (
    <>
    <Container>

      
      <section className="grid grid-cols-12">
        <div className="col-span-4">left side bar</div>
        <div className="col-span-8">
          <AllProduct></AllProduct>
        </div>
      </section>
    </Container>
    </>
  );
};

export default Shop;