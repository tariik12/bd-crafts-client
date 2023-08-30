import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
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
    }
    return (
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
        <button type="submit" className='btn hover:bg-[#3879ba] btn-sm mt-4 bg-[#1589FF]' disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheckoutForm;