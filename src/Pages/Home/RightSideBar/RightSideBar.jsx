import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineFundView } from "react-icons/ai";
import { FaExternalLinkAlt, FaMoneyBill, FaUserFriends } from "react-icons/fa";
import "./RightSideBar.css";
import { Link } from "react-router-dom";
import { PriceChange, ProductionQuantityLimits } from "@mui/icons-material";
import { Money } from "phosphor-react";

const RightSideBar = () => {
  const [products, setFriends] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("https://bd-crafts-server.vercel.app/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  return (
    <div className="p-2 Right">
      <div className="grid grid-cols-1 mb-3 items-center">
        <h1 className="text-xl font-bold flex justify-center items-center">Populer Products</h1>

        <Slider {...settings} className="">
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


      <div className="bg-[#186DBE0F] py-2 px-3 mx-3 rounded-lg shadow-md mb-24">
        <h1 className="text-[#7BB4FF] text-2xl font-semibold">All Friends</h1>
        {/* shop list */}
        {products?.map((product) => (
          <div
            key={product._id}
            className="flex justify-between items-center my-1"
          >
            <img
              src={product?.img}
              alt={product?.name}
              className="w-10 h-10 rounded-full"
            />
            <p className="text-[#082B59]">{product?.name}</p>
            <Link>
              <FaExternalLinkAlt />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
