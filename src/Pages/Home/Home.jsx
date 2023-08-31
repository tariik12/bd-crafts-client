import { useEffect, useState } from "react";
import DisplayPost from "../../Components/DisplayPost/DisplayPost";
// import CreatePost from "../../Components/Navber/CreatePosts/CreatePost";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import CreateStory from "../../Components/CreateStory/CreateStory";
import Post from "../../Components/Post/Post";



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
    <div className="flex justify-between">
      {/* <div className="grid-cols-1 w-[300px] "> */}
      <div className="w-3/12">
        <LeftSideBar />
        {/* <h5>hgfyufy</h5> */}
      </div>
      {/* Create post & Post Div (Rabeya) */}

      {/* <div className=" w-[680px] ms-12 "> */}
      <div className=" w-6/12">
        <div >
          <CreateStory />
        </div>
        <div>
          <Post></Post>
        </div>
        <div className=" grid  gap-3 ">
          {
            posts?.map((post) => <DisplayPost key={post?._id} post={post} />)
          }
        </div> 
        {/*  <p>Lorem ipsum dolor sit amet.</p> */}

      </div>


      {/* <div className=" w-[300px] bg-base-300 "> */}
      <div className=" w-3/12 text-black  bg-red-900">
        <RightSideBar />
        {/* <h4>gfyjf</h4> */}
      </div>
    </div>
  );
};

export default Home;