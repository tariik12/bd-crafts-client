import Categories from "../../Components/ShopByCategory/Categories";
import ShopSlider from "../../Components/ShopSlider/ShopSlider";

const Shop = () => {
  return (
    <div>
      {/* <Container> */}
      <h1 className="text-3xl font-bold text-center my-3">Craft Box</h1>
      <ShopSlider></ShopSlider>
      <Categories></Categories>
      {/* </Container> */}
    </div>
  );
};

export default Shop;
