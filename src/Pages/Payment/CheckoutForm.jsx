import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState()
    const handleSubmit =async(event) =>{
        event.preventDefault();
if(!stripe || !elements){
    return;
}
const card = elements.getElement(CardElement);

if(card == null){
    return
}
console.log("card", card)
const {error, paymentMethod} = await stripe.createPaymentMethod({
    type:"Card",
    card
})
if(error){
    console.log('Error', error)
    setCardError(error.message)
}
else{
    setCardError('')
    console.log('payment method',paymentMethod)
}
    }
    return (
        <>
        <form className="w-1/2 mx-auto mt-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button  type="submit" className='btn hover:bg-[#3879ba] btn-sm mt-4 bg-[#1589FF]' disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;