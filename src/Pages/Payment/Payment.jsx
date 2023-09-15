import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";



import useCart from "../../hooks/useCart";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment/moment";
// TODO: PROVIDE PUBLISH KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_pk);
const Payment = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit,} = useForm();
    const [cart] = useCart();
    const productData = cart;
    console.log(productData)
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    parseFloat(total.toFixed(2))
    
   

    const onSubmit = (data) =>{    
        console.log(data)
        data.price = parseInt(total)
        if(data){
          fetch("https://bd-crafts-server.vercel.app/order",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            window.location.replace(result.url)
            console.log(result)
        })
        }
       
    }
    

    return (
        <div>
           <div className=" container mt-8">
          
          <h1 className="text-3xl font-semibold mb-4 text-center">Confirm Order</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="buyerName"
                defaultValue={user.displayName}
                placeholder='Your Name'
                readOnly
               
                {...register('buyerName',{ required: true })}
                className="mt-1 p-2 border rounded w-full"
              />
            
            </div>
            <div className="mb-4">
             
              <input
                type="email"
                name="buyerEmail"
                defaultValue={user.email}
                placeholder='Your Email'
                {...register("buyerEmail")}
                readOnly
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
          
            <div className="mb-4">
             
             <input
               type="text"
               name="confirmTime"
               readOnly
               value= { moment(user.date).format('llll')}
               {...register("confirmTime")}
               className="mt-1 p-2 border rounded w-full"
             />
           </div>
           <div className="mb-4">
             
             <textarea
               type="text"
               name="buyerAddress"
               placeholder='Your Address'
               {...register("buyerAddress")}
               className="mt-1 p-2 border rounded w-full"
               required
             />
           </div>

            <div className="flex justify-center">
            <button
            onClick={onSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded "
            >
               Confirm Order
            </button>
            </div>
       
          </form>
        </div>
            {/* <button  className="btn mx-a w-32">payment ssl</button> */}
            <Elements stripe={stripePromise}> 

            <CheckoutForm cart={cart} price={productData.price}/>
            </Elements>
        </div>
    );
};

export default Payment;