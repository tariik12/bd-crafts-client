
const SellerTable = ({seller,idx,handleDelete,handleMakeSeller}) => {
    console.log(seller);
    
    return (
        <tr>
        <th>{idx+1}</th>
        
        <td>{seller?.sellerName}</td>
        <td>{seller?.sellerEmail}</td>
   <td> <button  onClick={() => handleDelete(seller)} className="btn btn-sm">Delete</button> </td>
        <td> <button   onClick={()=>handleMakeSeller(seller)} className="btn btn-sm">Make Seller</button> </td>


      </tr>
    );
};

export default SellerTable;