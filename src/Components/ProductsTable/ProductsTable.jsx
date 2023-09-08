

const ProductsTable = ({p,handleApproved,handleDelete,idx}) => {
    return (
        <tr>
        <th>
         {idx+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={p?.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{p?.name}</div>
              <div className="text-sm opacity-50">Quantity: {p?.quantity}</div>
            </div>
          </div>
        </td>
        <td>
        {p?.sellerName}
         
        </td>
        <td> <button  onClick={() => handleDelete(p)} className="btn btn-sm">Delete</button> </td>
        <td> <button   onClick={()=>handleApproved(p)} className="btn btn-sm">Approved</button> </td>
      </tr>
    );
};

export default ProductsTable;