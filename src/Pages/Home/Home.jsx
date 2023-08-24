import { useEffect, useState } from "react";
import DisplayPost from "../../Components/DisplayPost/DisplayPost";
import CreatePost from "../../Components/Navber/CreatePosts/CreatePost";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import CreateStory from "../../Components/CreateStory/CreateStory";
import PostCard from "../../Components/PostCard/PostCard";


const Home = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/allposts")
    .then((res)=>res.json())
    .then((data)=>{
      setPosts(data)
    })
  },[])
  console.log(posts);
    return (
        <div className="grid grid-flow-col">
        <div className="grid-cols-1 bg-red-600">
        <LeftSideBar/>
        </div>
        <div className="grid-cols-10 ">
        <CreateStory/>
          <CreatePost/>
          {
            posts?.map((post)=><DisplayPost key={post?._id} post={post}/>)
          }
           <PostCard></PostCard>
        </div>
        <div className="grid-cols-1 bg-green-500">
        <RightSideBar/>
        </div>
      </div>
    );
};

export default Home;