import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import AddProduct from "./AddProduct";

// import AddProduct from "./AddProduct";
import useCart from "../../hooks/useCart";
// TODO: PROVIDE PUBLISH KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_pk);
const Payment = () => {

    const [cart] = useCart();
    const data = cart;
    console.log(data)
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    parseFloat(total.toFixed(2))
    data.price = "1222"
   
    const onSubmit = () =>{    
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

            <CheckoutForm cart={cart} price={data.price}/>
            </Elements>
        </div>
    );
};

export default Payment;