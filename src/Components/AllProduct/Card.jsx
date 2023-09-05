import { Link } from "react-router-dom";

const Card = ({room}) => {
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
              src={room?.image?.img}
              alt="Room"
            />

       
        </div>
        <div className="font-semibold text-lg">{room.location}</div>
        <div className="font-light text-neutral-500">
          5 nights . {room.dateRange}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {room.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
        </div>
    );
};

export default Card;