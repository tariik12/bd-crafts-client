
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import Heading from "../../Heading/Heading";

const MyCart = () => {
    const [cart,refetch]=useCart()
   
    const total = cart.reduce((sum,item)=>item.price+sum,0);
    
    const handleDelete = i => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          
            if (result.isConfirmed) {
           
                fetch(`${import.meta.env.VITE_URL}/carts/${i?.id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
    {
        cart.length > 0?
        <>
                  <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       
        <th>NO</th>
        <th>Product Info</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,i)=> <tr key={item._id} >
        <td>
        {i+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.img} />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        {item?.name}
        </td>
        <td className="text-end">${item.price}</td>
        <td>
          <button onClick={() => handleDelete(item)} className="p-3 rounded-full bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)
      }
     
   
    </tbody>
   
  </table>
</div>

<div className="uppercase font-semibold gap-10 mr-40 mt-10 flex justify-end">
          
          <h2 className="font-bold">Total: ${total}</h2>
          <Link to="/dashboard/payment">
                  <button className="btn btn-warning btn-sm">PAY</button>
              </Link>
        </div>
        </>:
        <>
          <div className="pt-12">
          <Heading
            title="Your Cart is Empty!"
            subtitle="Looks like you haven't made order yet."
            center={true}
            
          />
        </div>
        </>
    }
        
      
       


        </div>
    );
};

export default MyCart;