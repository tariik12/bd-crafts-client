
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import "./CreateStory.css"
import { PiPenNibStraightLight } from "react-icons/pi";
import { BiImageAdd } from "react-icons/bi";
import StoryWriting from "./StoryWriting";
import StoryImage from "./StoryImage";
import { useQuery } from "@tanstack/react-query";
const CreateStorySlider = () => {
    const { user } = useContext(AuthContext);

    const { data: stories = [], refetch } = useQuery(["stories"], async () => {
      
      const res = await fetch(`${import.meta.env.VITE_URL}/createStory`);
      return res.json();
    });
  
    var settings = {
    
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
        swipeToSlide: true,
        slidesToShow: 3,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="z-50 mt-[18px]">
         <div className="grid grid-cols-12">
         <div className="w-[120px]  h-[251px] bg-contain bg-no-repeat bg-center  rounded-xl border col-span-3">
            <div className="">
              <div className="">
                <img
                  className="w-full h-[180px] rounded-2xl object-cover"
                  src={user?.photoURL}
                  alt="slider"
                />
              </div>
              {/* 33333333 */}
            <div className="flex justify-evenly mt-3">
            <button
              className="  rounded-full"
              onClick={() => window.my_modal_4.showModal()}
            >
             <div className="text-black my-1 flex items-center justify-center cursor-pointer">
                <span className="bg-[#7BB4FF] flex items-center justify-center border-2 border-gray-400 text-white h-10 w-10 rounded-full shadow-2xl">
                  <PiPenNibStraightLight className="h-5 w-5" />
                </span>
              </div>

            </button>
              <button
              className=" rounded-full"
              onClick={() => window.my_modal_5.showModal()}
            >
             <div className="text-black my-1 flex items-center justify-center cursor-pointer">
                <span className="bg-[#7BB4FF] flex items-center justify-center border-2 border-gray-400 text-white h-10 w-10 rounded-full shadow-2xl">
                  <BiImageAdd className="h-5 w-5" />
                </span>
              </div>

            </button>
            </div>
            </div>
         <StoryWriting refetch={refetch}/>
         <StoryImage  refetch={refetch}/>
           {/* /////55555 */}
          </div>
        <Slider {...settings} className="ms-12 md:ms-0 md:me-4 me-12  col-span-9 ">
        
          {
          stories.map(story =><div key={story._id} className="md:px-3 lg:px-1">
              {story.photoUrl?
              
              <>
              <div className="md:w-[140px] w-[200px]  h-[251px]  bg-contain bg-no-repeat bg-center bg-black rounded-2xl relative border overflow-hidden">
            
            <img
                className="w-full h-full rounded-xl object-cover "
                src={story.photoUrl}
                alt="slider"
                
              />
              <div className="absolute top-2 left-2  z-50 flex gap-3">
                <img
                  className="w-12 h-12 rounded-full border-2 border-[#7BB4FF] shadow-2xl"
                  src={story.createStoryImg}
                  alt="user img"
                  title={story.createStoryName}
                />
                <p className="text-xs">{story.confirmTime}</p>
              </div>
            </div>
              </>

              :

              <>
               <div className="md:w-[140px] w-[200px] h-[251px]  bg-contain bg-no-repeat bg-center bg-[#cfe0ec] rounded-2xl relative border overflow-hidden">
            
               <p className="pt-20 px-2 text-center">{story.writing}</p>
              <div className="absolute top-2 left-2  z-50 flex gap-3">
                <img
                  className="w-12 h-12 rounded-full border-2 border-[#7BB4FF] shadow-2xl"
                  src={story.createStoryImg}
                  alt="user img"
                  title={story.createStoryName}
                />
                 <p className="text-xs">{story.confirmTime}</p>
              </div>
            </div>
             
              </>

              }
           
          </div>)
        }
        </Slider>
      </div>   
        </div>
    );
};

export default CreateStorySlider;