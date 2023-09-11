// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import './CreateStory.css'
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import { PiPenNibStraightLight } from "react-icons/pi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";

const CreateStory = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const { register, handleSubmit,reset } = useForm();

  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/createStory')
      .then((res) => res.json())
      .then((data) => {
        setStories(data)
      })
  }, [])



  const onSubmit = (data) => {
   const createStoryName=user?.displayName;
   const createStoryImg = user?.photoURL;
   const createStoryEmail = user?.email;
    const info = {...data,createStoryName,createStoryImg,createStoryEmail}

  console.log(data,createStoryName,createStoryImg,createStoryEmail)

    if(user && user.email){

      fetch('http://localhost:3000/createStory',{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          reset()
          navigate('/')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Post Sucess',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }else{
      Swal.fire({
        title: 'You have to login for post',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!'
      }).then((result) => {
        if (result.isConfirmed) {
        Navigate('/Login',{state:{from:location}})
        }
      })
    }
  };


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
          <div className="w-[140px] lg:w-full h-[251px] bg-contain bg-no-repeat bg-center  rounded-xl border ">
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
           <dialog id="my_modal_4" className="modal ">
          <div method="dialog" className="modal-box">
           <div className=" w-full bg-[#cfe0ec] rounded-3xl shadow-2xl mt-10 p-5">
      <div className="flex gap-3  w-full mb-3 p-3">
        <div className="flex     ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL}/>
            </div>
          </div>
        </div>
        <div>
          <p>{user?.displayName}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder="Whats on your mind "
          {...register("writing", { required: true })}
          cols="65"
          className="w-full p-5"
          rows="5"
          name="writing"
        ></textarea>
        <div className="text-center mt-3">
          <input className="btn btn-primary " type="submit" value=" Create Story" />
        </div>
      </form>
    </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
         <dialog id="my_modal_5" className="modal ">
          <div method="dialog" className="modal-box">
           <div className=" w-full bg-[#cfe0ec] rounded-3xl shadow-2xl mt-10 p-5">
      <div className="flex gap-3  w-full mb-3 p-3">
        <div className="flex     ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL}/>
            </div>
          </div>
        </div>
        <div>
          <p>{user?.displayName}</p>
        </div>
      </div>
   
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Photo URL"
            name="photoUrl"
            {...register("photoUrl")}
            className="input input-bordered bg-slate-200"
          />
        </div>
        <div className="text-center mt-3">
          <input className="btn btn-primary " type="submit" value=" Create Story" />
        </div>
      </form>
    </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
           {/* /////55555 */}
          </div>
        </SwiperSlide>
        {
          stories.map(story =><SwiperSlide key={story._id}>
              {story.photoUrl?
              
              <>
              <div className="w-[140px] lg:w-full h-[251px]  bg-contain bg-no-repeat bg-center bg-black rounded-2xl relative">
            
            <img
                className="w-full h-full rounded-xl object-cover "
                src={story.photoUrl}
                alt="slider"
                
              />
              <div className="absolute top-2 left-2  z-50">
                <img
                  className="w-12 h-12 rounded-full border-2 border-[#7BB4FF] shadow-2xl"
                  src={story.createStoryImg}
                  alt="user img"
                  title={story.createStoryName}
                />
              </div>
            </div>
              </>

              :

              <>
               <div className="w-[140px] lg:w-full h-[251px]  bg-contain bg-no-repeat bg-center bg-[#cfe0ec] rounded-2xl relative">
            
               <p className="pt-20 px-2">{story.writing}</p>
              <div className="absolute top-2 left-2  z-50">
                <img
                  className="w-12 h-12 rounded-full border-2 border-[#7BB4FF] shadow-2xl"
                  src={story.createStoryImg}
                  alt="user img"
                />
              </div>
            </div>
             
              </>

              }
           
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default CreateStory;
