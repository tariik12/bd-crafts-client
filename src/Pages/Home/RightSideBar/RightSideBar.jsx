import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// import { FaExternalLinkAlt } from "react-icons/fa";
import "./RightSideBar.css";
// import { Link } from "react-router-dom";
import { ProductionQuantityLimits } from "@mui/icons-material";
import { Money } from "phosphor-react";

const RightSideBar = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    fetch("https://bd-crafts-server.vercel.app/product/allProduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  return (
    <div className="p-2 Right">
      <div className="grid grid-cols-1 mb-3 items-center bg-[#186DBE0F] py-2 px-3 mx-3 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-center">Populer Products</h1>

        <Slider {...settings} className="mx-10">
          {products?.map((product, index) => (
            <div
              key={index}
              className="card w-full mx-5 my-4 bg-base-100 shadow-md px-3"
            >
              <div className="avatar flex justify-center items-center">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                  <img src={product?.img} alt={product?.name} />
                </div>
              </div>
              <div className="flex justify-center items-center py-2">
                <div>
                  <h2 className="font-bold"> Product: {product?.name}</h2>
                  <p className="flex items-center gap-3">
                    <Money></Money>
                    <h1>Price: {product?.price}</h1>
                  </p>
                  <p className="flex items-center gap-3">
                    <ProductionQuantityLimits></ProductionQuantityLimits>
                    <h1>Quantity: {product?.quantity}</h1>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>


   
    </div>
  );
};

export default RightSideBar;
