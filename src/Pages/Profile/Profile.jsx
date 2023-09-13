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
  const userProfile = {
    id: 1,
    userName: "john_doe",
    fullName: "John Doe",
    email: "john@example.com",
    birthDate: "1990-05-15",
    location: "New York, USA",
    profilePicture:
      "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    coverPhoto:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    bio: "Software Developer | Nature Enthusiast",
    friendsCount: 256,
    followersCount: 512,
  };

  const {
    coverPhoto,
    userName,
    fullName,
    birthDate,
    location,
    profilePicture,
    bio,
    friendsCount,
    followersCount,
  } = userProfile;

  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState({});

  // const {} = userData;
  // console.log(userData);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/allposts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
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
            coverPhoto={coverPhoto}
            profilePicture={profilePicture}
            fullName={fullName}
            userName={userName}
            friendsCount={friendsCount}
            followersCount={followersCount}
          />

          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-4 ">
              <UserProfileName></UserProfileName>
              <ProfileFunction></ProfileFunction>
              <ProfileBio></ProfileBio>
              <AboutCard birthDate={birthDate} location={location} bio={bio} />
              <PhotoGallery></PhotoGallery>
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
