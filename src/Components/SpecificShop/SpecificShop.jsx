import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const SpecificShop = () => {
  const {id} = useParams()
  console.log(id)

  const [shops, setShop] = useState([]);

  useEffect(() => {
    fetch("../../../public/shopData.json")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  console.log(shops)
  const specificShop = shops?.find(shop =>shop._id === id)
  console.log(specificShop)
    return (
        <div>
           specificShop 

        </div>
    );
};

export default SpecificShop;