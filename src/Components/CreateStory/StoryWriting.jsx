import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";


const StoryWriting = ({refetch}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const { register, handleSubmit,reset } = useForm();

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
                refetch()
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
             navigate('/Login',{state:{from:location}})
             }
           })
         }
       };
     
    return (
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
        type='text'
        className="w-full p-5"
        rows="5"
        name="writing"
      ></textarea>
        <div className="mb-4">
             
             <input
               type="text"
               name="confirmTimeShort"
               readOnly
               value= { moment(user?.date).format('MMM Do YYYY, h:mm a')}
               {...register("confirmTimeShort")}
               className="mt-1 p-2 border rounded w-full"
             />
           </div>
        <div className="mb-4 hidden">
             
             <input
               type="text"
               name="confirmTime"
               readOnly
               value= { moment(user?.date).format('h:mm a')}
               {...register("confirmTime")}
               className="mt-1 p-2 border rounded w-full"
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
    );
};

export default StoryWriting;