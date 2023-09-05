import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader";
import Card from "./Card";
import Heading from "../Heading/Heading";

const AllProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch(`${import.meta.env.VITE_URL}/allProduct`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);
  
    if (loading) {
      return <Loader />;
    }
   console.log(data);
    return (
        <div>
           {data && data.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {data.map((d, index) => (
            <Card key={index} d={d} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No Products Available In This Category!"
            subtitle="Please Select Other Categories."
            center={true}
          />
        </div>
      )} 
            
        </div>
    );
};

export default AllProduct;