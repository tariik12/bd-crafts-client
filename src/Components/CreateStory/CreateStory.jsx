// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import './CreateStory.css'
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaPlus } from "react-icons/fa";

const CreateStory = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween:20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 23,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-4"
      >
        <SwiperSlide>
          <div className="w-[140px] lg:w-full h-[251px] bg-contain bg-no-repeat bg-center  rounded-xl border">
            <div className="">
              <div className="">
                <img
                  className="w-full h-[180px] rounded-2xl object-cover"
                  src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
                  alt="slider"
                />
              </div>
              <div className="text-black flex items-center justify-center">
                <span className="bg-[#7BB4FF] flex items-center justify-center border-2 border-gray-400 text-white h-10 w-10 rounded-full shadow-2xl">
                  <FaPlus className="h-5 w-5" />
                </span>
              </div>
              <span className="flex items-center justify-center text-[12px] text-[#000000]">
                Create Story
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] lg:w-full h-[251px]  bg-contain bg-no-repeat bg-center bg-black rounded-2xl relative">
            <img
              className="w-full h-full rounded-xl object-cover "
              src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
              alt="slider"
            />
            <div className="absolute top-2 left-2  z-50">
              <img
                className="w-12 h-12 rounded-full border-2 border-[#7BB4FF] shadow-2xl"
                src="https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png"
                alt="user img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] lg:w-full h-[251px]  bg-contain bg-no-repeat bg-center bg-black rounded-2xl relative">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
              alt="slider"
            />
            <div className="absolute top-2 left-2  z-50">
              <img
                className="w-12 h-12 rounded-full border-2 border-[#7BB4FF]"
                src="https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png"
                alt="user img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] lg:w-full h-[251px]  bg-contain bg-no-repeat bg-center bg-black rounded-2xl relative">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
              alt="slider"
            />
            <div className="absolute top-2 left-2  z-50">
              <img
                className="w-12 h-12 rounded-full border-2 border-[#7BB4FF]"
                src="https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png"
                alt="user img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] lg:w-full h-[251px]  bg-contain bg-no-repeat bg-center bg-black rounded-2xl relative">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
              alt="slider"
            />
            <div className="absolute top-2 left-2  z-50">
              <img
                className="w-12 h-12 rounded-full border-2 border-[#7BB4FF]"
                src="https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png"
                alt="user img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[140px] lg:w-full h-[251px]  bg-contain bg-no-repeat bg-center bg-black rounded-2xl relative">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
              alt="slider"
            />
            <div className="absolute top-2 left-2  z-50">
              <img
                className="w-12 h-12 rounded-full border-2 border-[#7BB4FF]"
                src="https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png"
                alt="user img"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CreateStory;
