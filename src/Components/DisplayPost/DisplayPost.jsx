import { FaComment, FaShare } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const DisplayPost = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { caption, photoUrl } = post;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const name=user?.displayName;
    const userImg = user?.photoURL;
    const postId =post?._id;
    const info = {...data,name,userImg,postId}
    fetch(`${import.meta.env.VITE_URL}/comment`, {
    
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.insertedId) {
          toast.success("comment done");
        }
      });
  };
  return (
    <div className="mt-10 p-5 bg-[#186DBE0F] shadow-2xl rounded-2xl w-full">
      <div className="flex gap-3">
        <div className="flex justify-center items-center w-14 h-14 p-2  ">
          <div className="avatar online">
           
              <div className="w-12 rounded-full">
                <img src={post?.img} />
              </div>
        
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{post?.name}</h1>
          <small>9 min ago</small>
        </div>
      </div>
      <div className="py-5 text-black mb-3">
        <p>{caption}</p>
      </div>

      {/* post card */}
      {post?.photoUrl ? (
        <>
          <div className="flex justify-center ">
            <div className="w-full    ">
              <div>
                <a href="#">
                  <img
                    className="mb-3 rounded-xl w-full mx-auto"
                    src={photoUrl}
                    alt="product image"
                  />
                </a>
              </div>
              <div className="p-4 rounded-3xl  shadow-lg pb-5 bg-[#FFF]">
                <div className="flex items-center justify-between ">
                  <span className="flex items-center gap-2">
                    {" "}
                    <BiLike size={20}></BiLike>Like
                  </span>
                  <button
                    onClick={() => window.my_modal_1.showModal()}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <FaComment size={20}></FaComment>Comment
                  </button>
                  <span className="flex items-center gap-2">
                    {" "}
                    <FaShare size={20}></FaShare> Share
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Comment section */}
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-3   mb-3 p-3">
                <div className="mt-5    ">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-5 w-full">
                  <input
                    type="text"
                    placeholder="Write a comment"
                    {...register("comment", { required: true })}
                    className="input input-bordered p-4   rounded-3xl  shadow-lg  bg-[#FFF]"
                  />
                </div>
                <div className="text-center mt-3">
                  <input
                    className="btn btn-primary mt-2 hover:bg-[#186DBE0F]"
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center ">
            <div className="w-full max-w-6xl  ">
              <div className="p-4 rounded-3xl  shadow-lg pb-5 bg-[#FFF]">
                <div className="flex items-center justify-between ">
                  <span className="flex items-center gap-2">
                    {" "}
                    <BiLike size={20}></BiLike>Like
                  </span>
                  <button
                    onClick={() => window.my_modal_1.showModal()}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <FaComment size={20}></FaComment>Comment
                  </button>
                  <span className="flex items-center gap-2">
                    {" "}
                    <FaShare size={20}></FaShare> Share
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Comment section */}
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-3   mb-3 p-3">
                <div className="mt-5    ">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-5 w-full">
                  <input
                    type="text"
                    placeholder="Write a comment"
                    {...register("comment", { required: true })}
                    className="input input-bordered p-4   rounded-3xl  shadow-lg  bg-[#FFF]"
                  />
                </div>
                <div className="text-center mt-3">
                  <input
                    className="btn btn-primary mt-2 hover:bg-[#186DBE0F]"
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      )}

      {/* display comment on modal */}

      <div className="w-full ">
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <p className="py-4">{post?.comment}</p>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default DisplayPost;
