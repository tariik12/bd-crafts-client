import { useContext, useEffect, useState } from "react";
import AboutCard from "../../Components/AboutCard/AboutCard";
import DisplayPost from "../../Components/DisplayPost/DisplayPost";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import Post from "../../Components/Post/Post";
import ProfileBanner from "../../Components/ProfileBanner/ProfileBanner";
import ProfileBio from "../../Components/ProfileBio/ProfileBio";
import ProfileFunction from "../../Components/ProfileFunction/ProfileFunction";
import UserProfileName from "../../Components/UserProfileName/UserProfileName";
import { AuthContext } from "../../Provider/AuthProvider";
import Container from "../../Utilities/Container";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);

  // to get single user post
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/posts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [user?.email]);

  // user data
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/singleUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, [user?.email]);

  return (
    <>
      <div>
        <Container>
          <ProfileBanner
            coverPhoto={userData[0]?.coverPhoto}
            profilePicture={user?.photoURL}
            friendsCount={userData[0]?.friendsCount}
            followersCount={userData[0]?.followersCount}
          />

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16">
            <div className="col-span-4 ">
              <UserProfileName
                name={userData[0]?.name}
                userName={userData[0]?.userName}
              ></UserProfileName>
              <ProfileFunction></ProfileFunction>
              <ProfileBio bio={userData[0]?.bio}></ProfileBio>
              <AboutCard
                birthDate={userData[0]?.birth}
                location={userData[0]?.location}
                bio={userData[0]?.bio}
                relation={userData[0]?.relation}
                religion={userData[0]?.religion}
                working={userData[0]?.working}
              />
              <PhotoGallery posts={posts}></PhotoGallery>
            </div>
            <div className="col-span-8 ">
              <Post />
              {posts?.map((post) => (
                <DisplayPost key={post?._id} post={post} />
              ))}
            </div>
          </div>
          {/* container end */}
        </Container>
      </div>
    </>
  );
};

export default Profile;
