import AboutCard from "../../Components/AboutCard/AboutCard";
import CreatePost from "../../Components/Navber/CreatePosts/CreatePost";
import ProfileBanner from "../../Components/ProfileBanner/ProfileBanner";
import Container from "../../Utilities/Container";

const Profile = () => {
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
    posts: [
      {
        id: 101,
        timestamp: "2023-08-18T12:00:00Z",
        content: "Just enjoying a beautiful day outdoors!",
        likes: 42,
        comments: [
          {
            id: 1001,
            timestamp: "2023-08-18T12:30:00Z",
            user: {
              id: 2,
              username: "jane_smith",
              fullName: "Jane Smith",
              profilePicture: "https://example.com/jane_profile.jpg",
            },
            content: "Looks amazing! 😍",
          },
          {
            id: 1002,
            timestamp: "2023-08-18T13:00:00Z",
            user: {
              id: 3,
              username: "mike_jones",
              fullName: "Mike Jones",
              profilePicture: "https://example.com/mike_profile.jpg",
            },
            content: "Wish I could be there too!",
          },
        ],
      },
    ],
  };
  const {
    coverPhoto,
    userName,
    fullName,
    birthDay,
    location,
    profilePicture,
    bio,
    friendsCount,
    followersCount,
  } = userProfile;

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

          <div className="grid grid-flow-col">
            <div className="grid-rows-1">
              <AboutCard birthDay={birthDay} location={location} bio={bio} />
            </div>
            <div className="grid-rows-10 bg-red-600">
              <CreatePost />
            </div>
            <div className="grid-rows-1 bg-blue-600 ">All friend list</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;
