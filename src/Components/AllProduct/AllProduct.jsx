import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader";
import Card from "./Card";
import Heading from "../Heading/Heading";

const AllProduct = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch(`https://airbnb-clone-server-ruby.vercel.app/${"all"}`)
        .then((res) => res.json())
        .then((data) => {
          setRooms(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);
  
    if (loading) {
      return <Loader />;
    }
    return (
        <div>
           {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} room={room} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
            center={true}
          />
        </div>
      )} 
            
        </div>
    );
};

export default AllProduct;