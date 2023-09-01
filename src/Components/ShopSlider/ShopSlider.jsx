import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
const ShopSlider = () => {
  const images = [
    {
      image:
        "https://img.freepik.com/free-photo/ceramic-pottery-tools-still-life_23-2150197294.jpg?size=626&ext=jpg&ga=GA1.1.649939747.1680192950&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-photo/ceramic-pottery-tools-still-life_23-2150197294.jpg?size=626&ext=jpg&ga=GA1.1.649939747.1680192950&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-photo/ceramic-pottery-tools-still-life_23-2150197294.jpg?size=626&ext=jpg&ga=GA1.1.649939747.1680192950&semt=ais",
    },
  ];

  return (
    <>
      <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img className="object-cover w-full" src={img?.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ShopSlider;
