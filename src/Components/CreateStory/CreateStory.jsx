import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CreateStory = () => {
    const user = true;
    return (
        <div className='flex flex-row gap-5 p-5 w-full'>
{/* card  */}
<div className="card card-compact h-[300px] w-[250px] bg-base-300 rounded-lg  shadow-xl">
{user&&  <figure><img className=' w-[300px] h-[450px] rounded-lg' src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/327962592_590354229126514_2253518977091765012_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFliJJtZ62VESu7YTTRyVPCR9Gx6GChsSxH0bHoYKGxLMQssZPBoVdGdF8982g7eMwNXuhWdJCAFI1-bwpayJhN&_nc_ohc=mhAcqDQIPBMAX_q_7A5&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBhZ2f_r86JO3o6U7tv0jxtUkPbMadZaU5undoicQwq6g&oe=64E3E20E"  /></figure>}
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