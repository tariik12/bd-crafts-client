import { FaComment, FaShare } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";

const DisplayPost = ({ post }) => {
  const user = true;
  const { caption, photoUrl } = post;
  return (
    <div className="mt-10 p-5 base-300 shadow-2xl rounded-2xl w-full">
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
