import { Link } from "react-router-dom";

const Card = ({ d, handleAddToCart }) => {
  return (
    <div className="">
      <Link className="col-span-1 cursor-pointer group ">
        <div className="flex flex-col overflow-hidden gap-1 w-full justify-between h-[450px]">
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
              src={d?.img}
              alt="Room"
            />
          </div>
          <div className="font-semibold text-lg"> Product: {d.name}</div>
          <div className="font-semibold text-lg"> Shop:{d.shopname}</div>
          <div className="font-light text-neutral-500">
            Quantity : {d.quantity}
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">$ {d.price}</div>
            <div
              className={
                d?.quantity == 0 ? "text-red-900 text-xs" : "text-light text-xs"
              }
            >
              {d?.quantity == 0 ? "Stock Out" : "In Stock"}
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(d)}
            className="btn  border-none hover:border-1 bg-blue-500 border-orange-500 mt-4 "
          >
            Add to Card
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
