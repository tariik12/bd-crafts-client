import { ThumbUp } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaComment, FaShare } from "react-icons/fa6";
import { Navigate } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const DisplayPost = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { caption, photoUrl } = post;
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [like, setLike] = useState(0);
  const [islike, setIsLike] = useState(false);

  // get comments
  const { data: comments = [], refetch } = useQuery(["comments"], async () => {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/comments/${post?._id}`
    );

    return res.json();
  });

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const name = user?.displayName;
    const userImg = user?.photoURL;
    const postId = post?._id;
    const info = { ...data, name, userImg, postId };

    if (user && user.email) {
      fetch(`${import.meta.env.VITE_URL}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Comment Success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You have to login for comment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/Login", { state: { from: location } });
        }
      });
    }
  };

  const onLikeButtonClick = () => {
    setLike(like + (islike ? -1 : 1));
    setIsLike(!islike);
  };

  return (
    <div className="mt-10 p-5 bg-[#186DBE0F] shadow-2xl rounded-2xl w-full">
      <div className="flex gap-3">
        <div className="flex justify-center items-center w-14 h-14 p-2  ">
          <div className="avatar ">
            <div className="w-12 rounded-full">
              <img src={post?.img} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{post?.name}</h1>
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
                  <span
                    className="flex items-center gap-2"
                    onClick={onLikeButtonClick}
                  >
                    <ThumbUp
                      size={25}
                      style={{ color: islike ? "#327ee0" : "black" }}
                    />
                    <p style={{ color: islike ? "#327ee0" : "black" }}>
                      Like {like ? 1 : ""}
                    </p>
                  </span>

                  <button
                    onClick={() => setOpenModal(!openModal)}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <FaComment size={20} className="text-[#327ee0]"></FaComment>
                    {comments?.length} Comment
                  </button>
                  <button
                    onClick={() => setOpenModal2(!openModal2)}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <FaShare size={20} className="text-[#327ee0]"></FaShare> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Comment section */}
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-2 md:gap-3 items-center  mb-3 md:p-3">
                <div className="mt-5    ">
                  <div className="avatar ">
                    <div className="w-10 md:w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-5 w-full">
                  <input
                    type="text"
                    placeholder="Write a comment"
                    {...register("comment", { required: true })}
                    className="p-2 md:p-4   rounded-3xl  shadow-lg  bg-[#FFF]"
                  />
                </div>
                <div className="text-center mt-3">
                  <input
                    className="p-2 border-[2px] border-black rounded-xl  mt-2 hover:bg-[#186DBE0F]"
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
                  <span
                    className="flex items-center gap-2"
                    onClick={onLikeButtonClick}
                  >
                    <ThumbUp
                      size={25}
                      style={{ color: islike ? "blue" : "black" }}
                    />
                    <p style={{ color: islike ? "blue" : "black" }}>
                      Like {like ? 1 : ""}
                    </p>
                  </span>

                  <button
                    onClick={() => setOpenModal(!openModal)}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <FaComment size={20} color="blue"></FaComment>
                    {comments?.length} Comment
                  </button>
                  <button
                    onClick={() => setOpenModal2(!openModal2)}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <FaShare size={20} color="blue"></FaShare> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Comment section */}
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-2 md:gap-3 items-center     mb-3 p-3">
                <div className="mt-5    ">
                  <div className="avatar online">
                    <div className="w-10 md:w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-5 w-full">
                  <input
                    type="text"
                    placeholder="Write a comment"
                    {...register("comment", { required: true })}
                    className="p-2 md:p-4  rounded-3xl  shadow-lg  bg-[#FFF]"
                  />
                </div>
                <div className="text-center mt-3">
                  <input
                    className="p-2 border-[2px] border-black rounded-xl  mt-2 hover:bg-[#186DBE0F]"
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
          <div className="flex justify-center">
            <div className=" rounded-xl shadow-md md:w-[40vw]  max-h-screen bg-white  overflow-hidden text-sm ">
              <div className="flex flex-col cursor-pointer px-4 py-4">
                <div className="w-full">
                  <h2 className="text-2xl mb-3">Comments</h2>
                  <div>
                    {comments?.map((c, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-3">
                          <img
                            className="w-10 md:w-12 rounded-full"
                            src={c?.userImg}
                            alt=""
                          />
                          <p className="text-black font-semibold text-xl">
                            {c?.name}
                          </p>
                        </div>
                        <div className="ml-12 bg-slate-50 max-w-max p-2 rounded-2xl">
                          <p className="text-black ">{c?.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {openModal2 && (
        <>
          <div className=" rounded-xl shadow-md w-[40vw]  max-h-screen bg-white  overflow-hidden text-sm ">
            <div className="flex flex-row gap-3  cursor-pointer px-4 py-4">
              <FacebookShareButton
                url="https://bd-crafts-client.vercel.app/"
                hashtag="#React"
              >
                <FacebookIcon round={true}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton
                url="https://bd-crafts-client.vercel.app/"
                hashtag="#React"
              >
                <WhatsappIcon round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayPost;
