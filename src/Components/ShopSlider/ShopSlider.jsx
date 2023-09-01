import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const ShopSlider = () => {
  const images = [
    "https://img.freepik.com/premium-photo/closeup-craft-hearts-female-hands_392895-77875.jpg?w=900",
    "https://img.freepik.com/premium-photo/hands-make-potter-decorative-pattern-earthenware_35076-3898.jpg?w=1060",
    "https://img.freepik.com/free-photo/ceramic-pottery-tools-still-life_23-2150197294.jpg?w=900&t=st=1693565349~exp=1693565949~hmac=e68a156f1906db9c8af0960abe87730ac373cb6f8f79235332bae3e944b6b412",
    "https://img.freepik.com/premium-photo/intricate-designs-mexican-basket-weaving_670382-108404.jpg?w=740",
    "https://img.freepik.com/free-photo/hands-holding-red-heart-shape-wooden-background_23-2148355038.jpg?w=900&t=st=1693565357~exp=1693565957~hmac=e8e4d3ab0aff8e6b3e823e53c1ec77e5dbb1a9b3a7b61cf0ed3c71686a58a828",
  ];

  // You

  return (
    <>
      <section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="h-[250px]">
                <figure>
                  <img src={img} alt="car" className="w-full " />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ShopSlider;
