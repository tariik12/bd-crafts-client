import { Controller, useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const categories = [
  "Select",
  "Textile",
  "Pottery",
  "Woodworking",
  "Jewelry",
  "PaperCrafts",
  "Glass",
  "Metal",
  "Leather",
  "CandleMaking",
  "BambooCrafts"
];

const AddProducts = () => {
  const { user, loader } = useAuth();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const price = Number(data.price);
    data.price = price;

    data = { ...data, status: "pending" };
    console.log(data);
    // console.log(data);

    fetch(`https://bd-crafts-server.vercel.app/addProducts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          toast.success("New Products Added");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex space-y-10  items-center justify-center min-h-screen bg-gray-100 mb-5 mt-5">
      <div className=" w-1/2 px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Add New Products
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Craft Name <span className="text-warning">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-red-600"> Craft name is required</span>
            )}
          </div>
          {/* ===================== */}
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Catagory <span className="text-warning">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-red-600"> Craft name is required</span>
            )}
          </div> */}

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-black my-3"
            >
              Select Category<span className="text-warning">*</span>
            </label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <select {...field} className="input rounded-xl ">
                  <option value="" className=" " disabled>
                    Select a category
                  </option>
                  {categories.map((category, i) => (
                    <option key={i} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          {/* =============== */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Craft Image<span className="text-warning">*</span>
            </label>
            <input
              type="url"
              {...register("img", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {/* <input {...register("classImg", { required: true })} type="file" className="file-input file-input-bordered file-input-gray w-full " /> */}

            {errors.img && (
              <span className="text-red-600"> Craft Image is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              {...register("sellerName", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              {...register("sellerEmail", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Quantity<span className="text-warning">*</span>
            </label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.quantity && (
              <span className="text-red-600"> Quantity is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price<span className="text-warning">*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.price && (
              <span className="text-red-600"> Price is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600  "
          >
            {loader ? (
              <ImSpinner9
                className="m-auto animate-spin"
                size={24}
              ></ImSpinner9>
            ) : (
              "Add Products"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
