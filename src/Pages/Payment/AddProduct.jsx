import { Controller, useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, control } = useForm();

    const onSubmit = (data) => {
      // You can submit the form data to your backend API here.
      // For demonstration, we're just printing the data to the console.
      console.log(data);

      fetch("http://localhost:5000/addProduct",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    };
    return (
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-semibold mb-4">Add Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                {...register('productName',{ required: 'Product Name is required' })}
                className="mt-1 p-2 border rounded w-full"
              />
            
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Product Photo</label>
              <input
                type="url"
                name="productPhoto"
                {...register ("productPhoto")}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Product Quantity</label>
              <input
                type="number"
                name="productQuantity"
                {...register("productQuantity",{ required: 'Product Quantity is required' })}
                className="mt-1 p-2 border rounded w-full"
              />
             
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                {...register("price",{ required: 'Price is required' })}
                className="mt-1 p-2 border rounded w-full"
              />
              
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <input
                    type="date"
                    {...field}
                    className="mt-1 p-2 border rounded w-full"
                    // You can format the date using dayjs here
                    // Example: value={dayjs(field.value).format('YYYY-MM-DD')}
                  />
                )}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Add Product
            </button>
          </form>
        </div>
      );
};

export default AddProduct;