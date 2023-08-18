import ProfileAction from "../../Components/ProfileAction/ProfileAction";
import ProfileBanner from "../../Components/ProfileBanner/ProfileBanner";
import Container from "../../Utilities/Container";

const Profile = () => {
  return (
    <>
      <div>
        <Container>
          <ProfileBanner />
          <ProfileAction />
        </Container>
      </div>
    </>
  );
};

export default Profile;
