import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";





const MyShop = () => {
const {user}=useAuth()


  const [data, setData] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/myProducts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        
      });
  }, [user?.email]);


  const ProductsCard = ({ f }) => {
    
    return (
      <div className=' cursor-pointer group'>
      <div className=''>
        <div
          className='
            
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
             h-[300px]
             object-cover
              group-hover:scale-110 
              transition
            '
            src={f?.img}
            alt='Room'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
           
          </div>
        </div>
        <div className='font-semibold text-lg mt-5'>{f?.name}</div>
        
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>Price: {f?.price}</div>
          <div className='font-light'>In Stock</div>
        </div>
  <div className="flex gap-5 mt-1">
    <div>
 
    </div>
    <div>
    <button
     
     className="btn btn-outline border-0 border-b-4 border-green-500 mt-4 "
   >
   Buy Now
   </button>
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
  {data?.map((f,i) => (
    <ProductsCard key={i} f={f}></ProductsCard>
  ))}
</div>

</div>

   
   
   
   
   </>
  )
};

export default MyShop;
