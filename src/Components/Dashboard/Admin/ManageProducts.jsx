import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import ProductsTable from "../../ProductsTable/ProductsTable";



const ManageProducts = () => {
    const { data: products = [], refetch } = useQuery(["products"], async () => {
    
        const res = await fetch(`${import.meta.env.VITE_URL}/pendingProducts`);
        return res.json();
      });

const handleApproved=(p)=>{
    fetch(
        `${import.meta.env.VITE_URL}/approvedProducts/${p?._id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.modifiedCount) {
            toast.success(`Approved`)
            refetch();
          }
        });
}
const handleDelete = (p) => {
    fetch(
      `${import.meta.env.VITE_URL}/deleteProducts/${p?._id}`,
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
    return (
           <div>
      
        <div className="overflow-x-auto">


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        NO
        </th>
        <th>Products Info</th>
        <th>Seller Name</th>
        <th>Delete</th>
        <th>Approved</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
      {
products?.map((p,idx)=><ProductsTable key={idx} p={p} idx={idx}  handleApproved={handleApproved} handleDelete={handleDelete}></ProductsTable>)
}
    
    </tbody>

    
  </table>
</div>


</div>
      
    </div>
    );
};

export default ManageProducts;