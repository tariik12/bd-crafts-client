import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../hooks/useCart";
// TODO: PROVIDE PUBLISH KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_pk)
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            Payment
            <Elements stripe={stripePromise}> 

            <CheckoutForm cart={cart} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;