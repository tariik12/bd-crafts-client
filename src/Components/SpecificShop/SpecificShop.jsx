import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shop from "../../Pages/Shop/Shop";

const SpecificShop = () => {
  const { id } = useParams();

  const [shops, setShop] = useState([]);

  useEffect(() => {
    fetch("../../../public/shopData.json")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  // console.log(shops)
  const specificShop = shops?.find((shop) => shop._id === id);
  // console.log(specificShop)
  return (
    <div>
      <Shop></Shop>
    </div>
  );
};

export default SpecificShop;
