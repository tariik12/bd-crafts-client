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
    fetch("http://localhost:5000/allposts")
    .then((res)=>res.json())
    .then((data)=>{
      setPosts(data)
    })
  },[])
  console.log(posts);
    return (
        <div className="grid grid-flow-col">
        <div className="grid-cols-1 w-[300px] bg-red-600">
        <LeftSideBar/>
        </div>
        <div className="grid-cols-1 w-[790px]">
        <CreateStory/>
          <Post></Post>
          {
            posts?.map((post)=><DisplayPost key={post?._id} post={post}/>)
          }
          
        </div>
        <div className="grid-cols-1 w-[250px] bg-green-500">
        <RightSideBar/>
        </div>
      </div>
    );
};

export default Home;