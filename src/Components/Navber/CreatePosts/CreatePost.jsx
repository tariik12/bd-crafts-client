import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
const CreatePost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // fetch("import.meta.env.VITE_URL/post", {
      fetch(`${import.meta.env.VITE_URL}/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
        
        toast.success("post done")  
        }
      });
  };

  return (
    <div className=" w-full bg-slate-500 shadow-2xl mt-10 p-5">
      <div className="flex gap-3  w-full mb-3 p-3">
        <div className="flex     ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/327962592_590354229126514_2253518977091765012_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFliJJtZ62VESu7YTTRyVPCR9Gx6GChsSxH0bHoYKGxLMQssZPBoVdGdF8982g7eMwNXuhWdJCAFI1-bwpayJhN&_nc_ohc=mhAcqDQIPBMAX_q_7A5&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBhZ2f_r86JO3o6U7tv0jxtUkPbMadZaU5undoicQwq6g&oe=64E3E20E" />
            </div>
          </div>
        </div>
        <div>
          <p>Rayhan Shorker</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder="Whats on your mind"
          {...register("caption", { required: true })}
          cols="65"
          className="w-full p-5"
          rows="5"
        ></textarea>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Photo URL"
            {...register("photoUrl", { required: true })}
            className="input input-bordered"
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
