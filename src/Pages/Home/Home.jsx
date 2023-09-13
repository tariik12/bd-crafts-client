import { useEffect, useState } from "react";
import DisplayPost from "../../Components/DisplayPost/DisplayPost";
// import CreatePost from "../../Components/Navber/CreatePosts/CreatePost";
import CreateStory from "../../Components/CreateStory/CreateStory";
import Post from "../../Components/Post/Post";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/allposts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="lg:col-span-3 hidden lg:block ">
            <LeftSideBar />
          </div>

          <div className="grid-cols-12 md:col-span-6">
            <div>
              <CreateStory />
            </div>
            <div>
              <Post></Post>
            </div>
            <div className=" grid  gap-3 ">
              {posts?.map((post) => (
                <DisplayPost key={post?._id} post={post} />
              ))}
            </div>
          </div>

          <div className=" lg:col-span-3 hidden lg:block text-black  ">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
