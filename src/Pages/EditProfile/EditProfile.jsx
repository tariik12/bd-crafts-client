import Swal from "sweetalert2";

const handleEditProfile = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const coverPhoto = form.pictureURL.value;
  const userInfo = {
    name,
    coverPhoto,
  };

  fetch(``, {
    method: "POST",
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

const EditProfile = () => {
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
                type="text"
                name="pictureURL"
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
                name="sellerName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Date of Birth:
              </label>
              <input
                type="email"
                id="sellerEmail"
                name="sellerEmail"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Location:
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl text-gray-700">
                Relationship Status:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-xl text-gray-700">Bio:</label>
            <textarea
              name="description"
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
