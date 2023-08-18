import { BsCameraVideoFill } from "react-icons/bs";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import CreatePost from "../Navber/CreatePosts/CreatePost";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Post = () => {
  const { user} = useContext(AuthContext)

  return (
    <div className="card shadow-xl mt-10">
      <div className=" card-body">
        <div className="flex gap-1">
        {user ?  
        <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>:
          <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
          </div>
        </div>
          
          }

          <button
            className="p-1 w-[700px] btn bg-slate-500 rounded-xl"
            onClick={() => window.my_modal_2.showModal()}
          >
            Whats on your mind {user?.displayName
}
          </button>
        </div>
      </div>
      <p className="  border-b-2  w-full  border-black  mt-1 mb-3 "></p>
      <div className="flex justify-between p-5">
        <div className="flex gap-3">
          <BsCameraVideoFill size={30} />
          <p>Live Vedio</p>
        </div>
        <div className="flex gap-3">
          <BiSolidPhotoAlbum size={30} />
          <p>Photos/Vedios</p>
        </div>
        <div className="flex gap-3">
          <HiOutlineEmojiHappy size={30} />
          <p>Feeling/Activity</p>
        </div>
      </div>
      {/* Modal */}

      <div className="w-full">
        <dialog id="my_modal_2" className="modal bg-base-200">
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
