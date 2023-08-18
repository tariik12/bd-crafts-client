import SingleFriend from "./SingleFriend";

const AllFriendList = () => {
  const allFriend = [
    {
      _id: 1,
      username: "john_doe",
      fullName: "John Doe",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      _id: 2,
      username: "jane_smith",
      fullName: "Jane Smith",
      profilePicture:
        "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
    },
    {
      _id: 3,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 4,
      username: "john_doe",
      fullName: "John Doe",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      _id: 5,
      username: "jane_smith",
      fullName: "Jane Smith",
      profilePicture:
        "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
    },
    {
      _id: 6,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 7,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 8,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 9,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 10,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 11,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 12,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 13,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 14,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
    {
      _id: 15,
      username: "mike_jones",
      fullName: "Mike Jones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
    },
  ];
  return (
    <>
      <section className="px-2">
        <h1 className="text-center font-semibold">All Friend List</h1>
        {allFriend.map((friend) => (
          <SingleFriend key={friend._id} friend={friend}></SingleFriend>
        ))}
      </section>
    </>
  );
};

export default AllFriendList;
