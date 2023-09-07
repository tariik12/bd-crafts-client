import { FaComment, FaShare } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext,useState } from "react";
import { useQuery } from "@tanstack/react-query";
const DisplayPost = ({ post }) => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const { caption, photoUrl } = post;

  // get comments 
  const { data: comments = [], refetch } = useQuery(["comments"], async () => {
    const res = await fetch(`${import.meta.env.VITE_URL}/comments/${post?._id}`);
    
    return res.json();
  });
// const displayComments=(post)=>{
//   fetch(`http://localhost:5000/comments/${post?._id}`)
//   .then(res=>res.json())
//   .then(data=>console.log(data))
// }






  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {

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
          reset()
          refetch()
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
            <div className="w-full">
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
                     onClick={() => setOpenModal(!openModal)}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <FaComment size={20}></FaComment>{comments?.length} Comment
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
                      onClick={() => setOpenModal(!openModal)}
                     
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

       {openModal && (
        
       <>
       
       <div className=" rounded-xl shadow-md w-[40vw]  max-h-screen bg-white  overflow-hidden text-sm ">
          <div className="flex flex-col cursor-pointer px-4 py-4">
            <div>
              <h2 className="text-2xl">Comments</h2>
              <div className="flex mt-4">
               
              </div>
              <div className="">
                <span className="">
                 {
                  comments?.map((c,i)=>
                    
                    <div key={i}  >
<div className="flex items-center gap-3">
<img className="w-12 rounded-full" src={c?.userImg} alt="" />
                      <p className="text-black" >{c?.name}</p>
                      
</div>
                      <div className="ml-16 bg-slate-400 max-w-max p-2 rounded-2xl">

                      <p className="text-black " >{c?.comment}</p>
                      </div>
                    </div>
                  )
                 }
                </span>
              </div>
            </div>
          </div>
        </div>
       </>
      )}
    </div>
  );
};

export default DisplayPost;
