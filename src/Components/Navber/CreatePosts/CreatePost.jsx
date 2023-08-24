import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const CreatePost = () => {
  const { user} = useContext(AuthContext)
  const { register, handleSubmit } = useForm();
console.log(user);
  const onSubmit = (data) => {
   const name=user?.displayName;
   const img = user?.photoURL;
   const email = user?.email;
    const info = {...data,name,img,email}

      fetch(`${import.meta.env.VITE_URL}/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
        
        toast.success("post done")  
        }
      });
  };

  return (
    <div className=" w-full bg-[#7eb9df] rounded-3xl shadow-2xl mt-10 p-5">
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
          {...register("caption", { required: true })}
          cols="65"
          className="w-full p-5"
          rows="5"
        ></textarea>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Photo URL"
            {...register("photoUrl", { required: true })}
            className="input input-bordered bg-slate-200"
          />
        </div>
        <div className="text-center mt-3">
          <input className="btn btn-primary " type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
