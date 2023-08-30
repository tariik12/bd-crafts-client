import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
// TODO: PROVIDE PUBLISH KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_pk)
const Payment = () => {
    return (
        <div>
            Payment
            <Elements stripe={stripePromise}> 

            <CheckoutForm/>
            </Elements>
        </div>
    );
};

export default Payment;