import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AuthContext } from '../../Provider/AuthProvider';

const CreateStory = () => {
    const {user }= useContext(AuthContext);
    return (
        <div className='flex flex-row gap-5 p-5 w-full'>
{/* card  */}
<div className="card card-compact h-[300px] w-[250px] bg-base-300 rounded-lg  shadow-xl">
{user ? <figure><img className=' w-[300px] h-[450px] rounded-lg' src={user?.photoURL}  /></figure>:
<figure><img className=' w-[300px] h-[450px] rounded-lg' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"  /></figure>
}
  <div className="card-body">
    <div className="card-actions justify-center mb-2 ">
      <button className="btn btn-primary">Create Story</button>
    </div>
  </div>
</div>
<div className='w-[400px]'>

                <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
   
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
   
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
   
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>     <img className='h-[300px] rounded-lg' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" /></SwiperSlide>
        
      </Swiper> 
</div>
        </div>
    );
};

export default CreateStory;