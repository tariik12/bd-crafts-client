import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import AddProduct from "./AddProduct";

// import AddProduct from "./AddProduct";
// TODO: PROVIDE PUBLISH KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_pk);
const Payment = () => {

  
    const onSubmit =() =>{
        const  data = {
            price:"12",
            name:"tarikul",
            currency:"USD",
            address: 'Dhaka,bangladesh',
            productID: "64f62e6e2def29c44000216b"
        }
        console.log(data)
        fetch("http://localhost:5000/order",{
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
    return (
        <div>
           <AddProduct></AddProduct>
            <button onClick={onSubmit} className="btn mx-a w-32">payment ssl</button>
            <Elements stripe={stripePromise}> 

            <CheckoutForm/>
            </Elements>
        </div>
    );
};

export default Payment;