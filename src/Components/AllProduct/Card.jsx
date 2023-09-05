import { Link } from "react-router-dom";

const Card = ({d}) => {
    return (
        <div>
            <Link className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
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
        <div className="font-semibold text-lg">{d.name}</div>
        <div className="font-light text-neutral-500">
          Quantity : {d.quantity}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {d.price}</div>
          <div className="font-light">In Stock</div>
        </div>
      </div>
    </Link>
        </div>
    );
};

export default Card;