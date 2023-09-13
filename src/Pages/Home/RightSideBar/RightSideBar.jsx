import { useEffect, useState } from "react";
// import OnlineFriends from "../../../Components/OnlineFriends/OnlineFriends";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineFundView } from "react-icons/ai";
import { FaExternalLinkAlt, FaUserFriends } from "react-icons/fa";
import "./RightSideBar.css";
import { Link } from "react-router-dom";
const RightSideBar = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("./activeFriend.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
      });
  }, []);

  const onlineFriends = friends?.filter(
    (onlineFriend) => onlineFriend.status === "active"
  );
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // eslint-disable-next-line no-unused-vars
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    // eslint-disable-next-line no-unused-vars
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    },
  };
  return (
    <div className="p-2 Right">
      <div className="grid grid-cols-1">
        <h1 className="text-xl font-bold">All Friends</h1>

        <Slider {...settings} className="">
          {onlineFriends?.map((friend, index) => (
            <div
              key={index}
              className="card w-full mx-5  my-4 bg-base-100 shadow-xl"
            >
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={friend?.Profile_image} />
                </div>
              </div>
              <div>
                <h2 className="font-bold"> {friend?.Name}</h2>
                <p className="flex items-center gap-3">
                  {" "}
                  <AiOutlineFundView />
                  View Profile
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <FaUserFriends />
                  Add as a friend
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <p className="border-b-2  w-full  border-black  mt-1 mb-3 "></p>
      </div>
      <div className="bg-[#186DBE0F] py-2 px-3 mx-3 rounded-lg shadow-md mb-24">
        <h1 className="text-[#7BB4FF] text-2xl font-semibold">Active Friend</h1>
        {/* shop list */}

        {onlineFriends?.map((friend) => (
          <div
            key={friend._id}
            className="flex justify-between items-center my-1"
          >
            <img
              src={friend?.Profile_image}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <p className="text-[#082B59]">{friend?.Name}</p>
            <Link>
              <FaExternalLinkAlt />
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-1 h-[400px] rounded-md shadow-2xl ">
        <h1 className="text-xl font-bold">Online Friends</h1>

        {onlineFriends?.map((friend) => (
          <OnlineFriends key={friend?._id} friend={friend} />
        ))}
      </div> */}
    </div>
  );
};

export default RightSideBar;
