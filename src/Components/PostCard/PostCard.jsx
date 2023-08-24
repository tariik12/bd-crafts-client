import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaBookmark, FaShare } from "react-icons/fa6";

const PostCard = ({ post }) => {
    const user = true;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('postData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
    }, [])



    return (
        // post card
        <div className="mt-10 p-5 base-300 shadow-2xl rounded-2xl" >

            {
                posts.map(post =>
                    <div key={post._id} className="mt-8">
                        <div className="flex gap-3">
                            <div className="flex justify-center items-center w-14 h-14 p-2  ">
                                <div className="avatar online text-green-900">
                                    {user && (
                                        <div className="w-12 rounded-full">
                                            {/* <img src={user.userPhoto} /> */}
                                            <img src={post.post_user_image} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {/* <h1 className="font-bold text-xl">{user.displayName}</h1> */}
                                <h1 className="font-bold text-xl">{post.posted_by}</h1>
                                <small>{post.time}</small>
                            </div>
                        </div>

                        <div className="card w-100 bg-base-100 shadow-xl">
                            <figure>
                                <img className="h-[500px]  w-[700px]" src={post.post_image} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                {/* Caption */}

                                <h2 className="card-title">
                                    Handi Craft
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h2>
                                <p>"Crafting beauty with my own hands – turning raw materials into intricate masterpieces. Handiwork at its finest! ✨🎨 #HandmadeCreations #CraftingPassion #ArtistryInMotion"</p>

                                {/* React Section */}
                                <div className="card-actions justify-around">
                                    <div className="badge badge-outline"><FaThumbsUp></FaThumbsUp>{post.like}</div>
                                    <div className="badge badge-outline">Comment</div>
                                    <div className="badge badge-outline"><FaShare></FaShare>{post.share}</div>
                                    <div className="badge badge-outline"><FaBookmark></FaBookmark></div>
                                </div>
                                <hr />
                                {/* Comment Section */}
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-14 h-14 p-2  ">
                                        <div className="avatar">
                                            {user && (
                                                <div className="w-12 rounded-full">
                                                    {/* <img src={user.userPhoto} /> */}
                                                    <img src={post.post_user_image} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <textarea placeholder="" className="textarea textarea-bordered textarea-xs w-96 " >

                                            {post.comments}
                                        </textarea>
                                    </div>
                                </div>


                                <hr />

                                {/* Write comment section */}
                                <div className="flex gap-5">
                                    <div >
                                        <div className="flex justify-center items-center w-14 h-14 p-2  ">
                                            <div className="avatar online text-green-900">
                                                {user && (
                                                    <div className="w-12 rounded-full">
                                                        {/* <img src={user.userPhoto} /> */}
                                                        <img src={post.post_user_image} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <textarea placeholder="Write Comment..." className="textarea textarea-bordered textarea-xs w-96 " >


                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }




        </div>
    );
};

export default PostCard;