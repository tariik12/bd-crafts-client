import { Link } from "react-router-dom";
import { useSearchContext, } from "../../Provider/ApiContestProvider";
import DisplayPost from "../DisplayPost/DisplayPost";
import { FaExternalLinkAlt } from "react-icons/fa";


const ShowSearchData = () => {
    const {searchData} = useSearchContext([]);
    console.log(searchData)
    const{post, users, products} = searchData;
    console.log(post,users,products)
    // const {name,photo} = post;
    const data = [... post,users,products]
    console.log(data)
    return (

        <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
            {users && <div className="w-[300px] mx-auto">
                {
                    users?.map((searchUser,index) =><div key={index}>

<div
              className="flex justify-between items-center my-1"
            >
              <img
                src={searchUser?.photo}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p className="text-[#082B59]">{searchUser?.name}</p>
              <Link to={`/specificShop/${searchUser._id}`}>
                <FaExternalLinkAlt />
              </Link>
            </div>
                    </div>)
                }
                </div>}
     
            </div>
            <div>
            {post && <div className="">
                {
                    post?.map((p,index) =><DisplayPost key={index} post={p}></DisplayPost>)
                }
                </div>}
            </div>
            
            
           
            
           
        </div>
    );
};

export default ShowSearchData;