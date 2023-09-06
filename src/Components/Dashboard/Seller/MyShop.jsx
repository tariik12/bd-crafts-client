
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyShop = () => {
  const { user } = useAuth();
  const { data: data = [], refetch } = useQuery(["data"], async () => {
    
    const res = await fetch(`${import.meta.env.VITE_URL}/myProducts?email=${user?.email}`);
    return res.json();
  });
 

  const handleDelete = (id) => {
    fetch(
      `${import.meta.env.VITE_URL}/deleteProducts/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount>0) {
          refetch();
           
          toast.success(`Deleted!`)
        }
      });
  };



// Products cart 
  const ProductsCard = ({ f }) => {
   
    return (
      <div className=" cursor-pointer group bg-rose-50 shadow-2xl rounded-xl m-5">
        <div className="">
          <div
            className="
            
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
          >
            <img
              className="
              object-cover 
                h-[200px]
                w-full 
                rounded-xl
            "
              src={f?.img}
              alt="Room"
            />
            <div
              className="
            absolute
            top-3
            right-3
          "
            ></div>
          </div>
      <div className="flex items-center justify-between p-3">

<div className="">
<p className="font-semibold text-lg mt-5">{f?.name}</p>
  <div className="font-semibold">Price: {f?.price}</div>
  <div className={f?.quantity ==0 ? 'text-red-900 text-xs' :'text-light text-xs'}>
    {
      f?.quantity == 0?"Stock Out":"In Stock"
    }
    </div>
</div>
          <div className="mt-5">
            <button className="btn btn-sm" onClick={()=>{handleDelete(f?._id)}}>Delete</button>
          </div>
      </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        {/* Products */}

        <p className="text-5xl font-bold text-center text-Black mb-5 mt-10">
          My Products
        </p>
        <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>
        <div className="grid md:grid-cols-3 gap-5 ml-5">
          {data?.map((f, i) => 
           
            
             <ProductsCard key={i} f={f}></ProductsCard>
        
          )}
        </div>
      </div>
    </>
  );
};

export default MyShop;
