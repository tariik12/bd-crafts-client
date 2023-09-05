
import { useState } from "react";
import Loader from "../Loader";
import Card from "./Card";
import Heading from "../Heading/Heading";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const AllProduct = () => {
    const {user}=useAuth()
    const [loading, setLoading] = useState(false);
  
    const { data: data = [], refetch } = useQuery(["data"], async () => {
    setLoading(true)
      const res = await fetch(`${import.meta.env.VITE_URL}/allProduct`);
      setLoading(false)
      return res.json();
    });

  


    const handleAddToCart=(item)=>{
    
     
      const info = {...item,email:user?.email}
      if(user && user.email){

        fetch(`${import.meta.env.VITE_URL}/carts`,{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(info),
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch()  
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item Added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }else{
        Swal.fire({
          title: 'You have to login for order food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
          Navigate('/Login',{state:{from:location}})
          }
        })
      }
    }



    if (loading) {
      return <Loader />;
    }
   console.log(data);
    return (
        <div>
           {data && data.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {data.map((d, index) => (
            <Card key={index} d={d} handleAddToCart={handleAddToCart}/>
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