import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import SellerTable from "./SellerTable";



const PendingSeller = () => {
  
    const { data: sellers = [], refetch } = useQuery(["sellers"], async () => {
    
        const res = await fetch(`${import.meta.env.VITE_URL}/pendingSeller`);
        return res.json();
      });
        //   make seller
        const handleMakeSeller = (seller) => {
            fetch(
              `${import.meta.env.VITE_URL}/seller/${seller?.sellerEmail}`,
              {
                method: "PATCH",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data?.result?.modifiedCount) {
                  toast.success(`${seller?.sellerName} is an Seller Now!`)
                  refetch();
                }
              });
          };
        const handleDelete = (seller) => {
            fetch(
              `${import.meta.env.VITE_URL}/deleteSeller/${seller?._id}`,
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
<table className="table ">
{/* head */}
<thead className=" text-xl font-bold">
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>Delete</th>
    <th>Aprove</th>
  </tr>
</thead>
<tbody>
{
sellers?.map((seller,idx)=><SellerTable key={idx} seller={seller} idx={idx} handleMakeSeller={handleMakeSeller} handleDelete={handleDelete}></SellerTable>)
}

</tbody>
</table>
</div>
      
    </div>
    );
};

export default PendingSeller;