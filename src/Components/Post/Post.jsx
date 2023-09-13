import { useContext } from "react";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import CreatePost from "../Navber/CreatePosts/CreatePost";

const Post = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="card shadow-xl mt-10 mb-10 bg-[#186DBE0F] ">
      <div className="card-body ">
        <div className="flex ml-0">
          <div className="relative left-11 top-2 ">
            {user ? (
              <div className="avatar  ">
                <div className="w-9 rounded-full ">
                  <img src={user?.photoURL} />
                </div>
              </div>
            ) : (
              <div className="avatar  ">
                <div className="w-9 rounded-full ">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                </div>
              </div>
            )}
          </div>

          {/* create post section */}
          <div className="w-full">
            <button
              className=" w-full btn bg-base-200  hover:bg-[#7eb9df] rounded-3xl "
              onClick={() => window.my_modal_2.showModal()}
            >
              <p className="text-left ml-9">Share your ideas...</p>
            </button>
          </div>
        </div>
      </div>
      <p className="  border-b-2  w-full  border-black  mt-1 mb-3 "></p>
      {/* <div className="flex justify-between p-5">
        <div className="flex gap-3">
          <BsCameraVideoFill size={30} color="#1589FF" />
          <Link to="/liveStreaming">Live Vedio</Link>
        </div>
        <div className="flex gap-3">
          <BiSolidPhotoAlbum size={30} color="#1589FF" />
          <p>Photos/Vedios</p>
        </div>
        <div className="flex gap-3">
          <HiOutlineEmojiHappy size={30} color="#1589FF" />
          <p>Feeling/Activity</p>
        </div>
      </div> */}
      {/* Modal */}

      <div className="w-full ">
        <dialog id="my_modal_2" className="modal ">
          <div method="dialog" className="modal-box">
            <CreatePost />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Post;
