import Categories from "../../Components/ShopByCategory/Categories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


const Shop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className:'btn btn-outline'


  };


// useEffect(() => {
//     Aos.init({ duration: 2000 })
//   }, [])
  return (
    <div className="">
 
      <h1 className="text-3xl font-bold text-center my-3 ">Craft Box</h1>
      <Slider {...settings} className=" border-b mx-10">
{/* 
        <div >
            <img src={banner} alt="" />
        </div> */}
        <div >
            <img className='md:w-[1280px] md:h-[395.457px]' src='https://st4.depositphotos.com/12722406/25147/i/1600/depositphotos_251470320-stock-photo-mud-pots-handicraft-products-market.jpg' alt="" />
        </div>
        <div >
            <img className='md:w-[1280px] md:h-[395.457px]' src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-08/hands-make-potter-decorative-pattern-earthenware.jpg" alt="" />
        </div>
        <div >
            <img className='md:w-[1280px] md:h-[395.457px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Handicrafts.JPG/1280px-Handicrafts.JPG" alt="" />
        </div>
        <div >
            <img className='md:w-[1280px] md:h-[395.457px]' src="https://rmgbd.net/wp-content/uploads/2019/04/639291-handicraft.jpg" alt="" />
        </div>
        <div >
            <img className='md:w-[1280px] md:h-[395.457px]' src="https://c8.alamy.com/comp/B3CRJJ/colorful-straw-baskets-shoes-and-other-handicraft-items-chengdu-sichuan-B3CRJJ.jpg" alt="" />
        </div>
        <div >
            <img className='md:w-[1280px] md:h-[395.457px]' src="https://www.shutterstock.com/shutterstock/photos/2089963243/display_1500/stock-photo-pune-india-handicraft-items-with-selective-focus-textile-and-wooden-goods-with-traditional-2089963243.jpg" alt="" />
        </div>
        <div >
            <img className='md:w-[1280px] md:h-[395.457px]' src="https://img.freepik.com/premium-photo/bangladesh-may-13-2018-village-handicraft-maker-girl-are-making-some-showpiece-boxes-using-pineapple-fiber-madhupur-tangail_94678-1110.jpg?w=2000" alt="" />
        </div>
        </Slider>
      <Categories></Categories>
    
    </div>
  );
};

export default Shop;
