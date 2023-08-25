import { useEffect, useState } from "react";
import DisplayPost from "../../Components/DisplayPost/DisplayPost";
// import CreatePost from "../../Components/Navber/CreatePosts/CreatePost";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import CreateStory from "../../Components/CreateStory/CreateStory";
// <<<<<<< HEAD
import PostCard from "../../Components/PostCard/PostCard";
// =======
import Post from "../../Components/Post/Post";
// >>>>>>> 7b62841c8c77c17a07daeee35b30d1ef26fbd426


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/allposts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <div className="grid grid-flow-col">
      <div className="grid-cols-1 w-[300px] ">
        <LeftSideBar />
      </div>
      <div className="grid-cols-1 w-[790px] ">
        <div>
          <CreateStory />
        </div>
        <div>
          <Post></Post>
        </div>
        <div className="bg-[#186DBE0F] grid grid-cols-1 gap-3 ">
          {
            posts?.map((post) => <DisplayPost key={post?._id} post={post} />)
          }

          <PostCard></PostCard>
          {/* ======= */}
        </div>

        {/* 7b62841c8c77c17a07daeee35b30d1ef26fbd426 */}
      </div>
      <div className="grid-cols-1 w-[250px] bg-base-300 ">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;