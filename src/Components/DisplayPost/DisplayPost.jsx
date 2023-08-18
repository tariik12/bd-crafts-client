import { FaComment, FaShare } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const DisplayPost = ({ post }) => {
  const {user} = useContext(AuthContext);
  const { caption, photoUrl } = post;
  return (
    <div className="mt-10 p-5 base-300 shadow-2xl rounded-2xl w-full">
      <div className="flex gap-3">
        <div className="flex justify-center items-center w-14 h-14 p-2  ">
          <div className="avatar online">
            {user ? 
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
              :
              <div className="w-12 rounded-full">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
            </div> 
            }
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{user?.displayName}</h1>
          <small>9 min ago</small>
        </div>
      </div>
      <div className="px-20 text-black mb-3">
        <p>{caption}</p>
      </div>
      {/* post image */}
      <div className="flex justify-center">
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
  );
};

export default DisplayPost;
