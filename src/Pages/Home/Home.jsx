import CreateStory from "../../Components/CreateStory/CreateStory";
import DisplayPost from "../../Components/DisplayPost/DisplayPost";
import CreatePost from "../../Components/Navber/CreatePosts/CreatePost";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";


const Home = () => {
    return (
        <div className="grid grid-flow-col">
        <div className="grid-cols-1 bg-red-600">
        <LeftSideBar/>
        </div>
        <div className="grid-cols-10 bg-orange-500">
        
          <CreateStory/>
          <CreatePost/>
          <DisplayPost/>
        </div>
        <div className="grid-cols-1 bg-green-500">
        <RightSideBar/>
        </div>
      </div>
    );
};

export default Home;