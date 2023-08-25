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
    fetch(`${import.meta.env.VITE_URL}/comment/${post?._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("comment done");
        }
      });
  };
  return (
    < div >
      <div className="mt-10 p-5 base-300 shadow-2xl rounded-2xl">
        <div className="flex gap-3">
          <div className="flex justify-center items-center w-14 h-14 p-2  ">
            <div className="avatar online">
              {user && (
                <div className="w-12 rounded-full">
                  <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/327962592_590354229126514_2253518977091765012_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFliJJtZ62VESu7YTTRyVPCR9Gx6GChsSxH0bHoYKGxLMQssZPBoVdGdF8982g7eMwNXuhWdJCAFI1-bwpayJhN&_nc_ohc=mhAcqDQIPBMAX_q_7A5&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBhZ2f_r86JO3o6U7tv0jxtUkPbMadZaU5undoicQwq6g&oe=64E3E20E" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">MD Rayhan</h1>
            <small>9 min ago</small>
          </div>
        </div>
        <div className="px-20 text-white mb-3">
          <p>{caption}</p>
        </div>
        {/* post image */}
        <div className="px-20">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img
                className="p-8 rounded-lg"
                src={photoUrl}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {" "}
                  <BiLike size={20}></BiLike>Like
                </span>
                <span className="flex items-center gap-2">
                  {" "}
                  <FaComment size={20}></FaComment>Comment
                </span>
                <span className="flex items-center gap-2">
                  {" "}
                  <FaShare size={20}></FaShare> Share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ======= */}
      <div className="mt-10 p-5  shadow-2xl rounded-2xl w-full">
        <div className="flex gap-3">
          <div className="flex justify-center items-center w-14 h-14 p-2  ">
            <div className="avatar online">
              {user ? (
                <div className="w-12 rounded-full">
                  <img src={post?.img} />
                </div>
              ) : (
                <div className="w-12 rounded-full">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                </div>
              )}
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
              <div className="w-full max-w-6xl    ">
                <div>
                  <a href="#">
                    <img
                      className="mb-3 rounded-xl mx-auto"
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
                    <span className="flex items-center gap-2">
                      {" "}
                      <FaComment size={20}></FaComment>Comment
                    </span>
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
                    <span className="flex items-center gap-2">
                      {" "}
                      <FaComment size={20}></FaComment>Comment
                    </span>
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
        {/* 7b62841c8c77c17a07daeee35b30d1ef26fbd426 */}
      </div>

    </div>
  );
};

export default DisplayPost;
