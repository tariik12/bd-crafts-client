import { BsCameraVideoFill } from "react-icons/bs";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import CreatePost from "../Navber/CreatePosts/CreatePost";

const Post = () => {
  return (
    <div className="card shadow-xl mt-10">
      <div className=" card-body">
        <div className="flex gap-1">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/327962592_590354229126514_2253518977091765012_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFliJJtZ62VESu7YTTRyVPCR9Gx6GChsSxH0bHoYKGxLMQssZPBoVdGdF8982g7eMwNXuhWdJCAFI1-bwpayJhN&_nc_ohc=mhAcqDQIPBMAX_q_7A5&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBhZ2f_r86JO3o6U7tv0jxtUkPbMadZaU5undoicQwq6g&oe=64E3E20E" />
            </div>
          </div>

          <button
            className="p-1 w-[700px] btn bg-slate-500 rounded-xl"
            onClick={() => window.my_modal_2.showModal()}
          >
            Whats on your mind
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
