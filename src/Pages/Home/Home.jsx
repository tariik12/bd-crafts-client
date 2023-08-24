import { useEffect, useState } from "react";
import DisplayPost from "../../Components/DisplayPost/DisplayPost";
// import CreatePost from "../../Components/Navber/CreatePosts/CreatePost";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import CreateStory from "../../Components/CreateStory/CreateStory";
import Post from "../../Components/Post/Post";


const Home = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_URL}/allposts`)
    .then((res)=>res.json())
    .then((data)=>{
      setPosts(data)
    })
  },[])
  
    return (
        <div className="grid grid-flow-col">
        <div className="grid-cols-1 w-[300px] ">
        <LeftSideBar/>
        </div>
        <div className="grid-cols-1 w-[790px] ">
        <div>
        <CreateStory/>
        </div>
         <div>
         <Post></Post>
         </div>
         <div className=" grid grid-cols-1 gap-3 ">
         {
            posts?.map((post)=><DisplayPost key={post?._id} post={post}/>)
          }
         </div>
          
        </div>
        <div className="grid-cols-1 w-[250px] bg-base-300 ">
        <RightSideBar/>
        </div>
      </div>
    );
};

export default Home;