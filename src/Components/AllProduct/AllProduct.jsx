import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Heading from "../Heading/Heading";
import Loader from "../Loader";
import Card from "./Card";

const AllProduct = () => {
  const { category } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  console.log(category);

  const { data: data = [], refetch } = useQuery(["data"], async () => {
    setLoading(true);
    const res = await fetch(`${import.meta.env.VITE_URL}/product/${category}`);
    setLoading(false);
    return res.json();
  });

  useEffect(() => {
    refetch();
  }, [category, refetch]);

  const handleAddToCart = (item) => {
    const info = {
      id: item?._id,
      email: user?.email,
      img: item?.img,
      name: item?.name,
      shopname: item?.shopname,
      price: item?.price,
      quantity: item?.quantity,
      sellerEmail: item?.sellerEmail,
      sellername: item?.sellerName,
    };
    if (user && user.email) {
      fetch(`${import.meta.env.VITE_URL}/carts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item Added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You have to login for order this products",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/Login", { state: { from: location } });
        }
      });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {data.map((d, index) => (
            <Card key={index} d={d} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No Products Available In This Shop!"
            subtitle="Product is coming soon."
            center={true}
          />
        </div>
      )}
    </div>
  );
};

export default AllProduct;
