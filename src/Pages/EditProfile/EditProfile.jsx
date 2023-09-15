import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const EditProfile = () => {
  const { user } = useContext(AuthContext);

  const handleEditProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const coverPhoto = form.pictureURL.value;
    const religion = form.religion.value;
    const birth = form.birth.value;
    const location = form.location.value;
    const relation = form.relation.value;
    const bio = form.bio.value;
    const userName = form.userName.value;
    const work = form.work.value;

    const userInfo = {
      name,
      coverPhoto,
      religion,
      birth,
      location,
      relation,
      bio,
      email: user?.email,
      userName,
      work,
    };

    fetch(`${import.meta.env.VITE_URL}/updateProfile`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged == true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Successfully",
            showConfirmButton: false,
            timer: 2000,
          });

          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="text-center my-4">
          <h1 className="text-3xl lg:text-4xl font-bold">Edit your profile</h1>
        </div>
        <form onSubmit={handleEditProfile}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Edit Your Name:
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Cover Photo:
              </label>
              <input
                type="url"
                name="pictureURL"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Username:
              </label>
              <input
                type="text"
                name="userName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Work At:
              </label>
              <input
                type="text"
                name="work"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Religion:
              </label>
              <input
                type="text"
                name="religion"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Date of Birth:
              </label>
              <input
                type="text"
                name="birth"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Location:
              </label>
              <input
                type="text"
                name="location"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Relationship Status:
              </label>
              <input
                type="text"
                name="relation"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-xl text-gray-700">Bio:</label>
            <textarea
              name="bio"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="text-center mb-4">
            <input
              type="submit"
              value="Submit"
              className="btn border-0 text-white bg-blue-600 hover:bg-blue-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
