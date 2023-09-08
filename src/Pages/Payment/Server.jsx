// npm install --save stripe     will be install in backend
// PAYMENT_SECRET_KEY=sk_test_51NHge1Emiv1Bs9YKhL550NTl3Dw8hD2LuMBW1u189KxzGVtJvE1QVUB93u0NpllnlbEBGA6Pyu0Nohqpnt2dP33j00uroV6OP1

//const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY)

{/* <div>
    {/* 
    app.post("/create-payment-intent"), async(req, res) =>{
        const {price} = req.body;
        const amount = price * 100;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_type:["card"]
    })
    res.send({
        clientSecret: paymentIntent.client_secret
    })
    }
    
    
    */}
// </div> */}