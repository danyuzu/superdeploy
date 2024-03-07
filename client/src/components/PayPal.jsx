import React, { useEffect, useRef } from "react";

const PayPal =() =>
{

    const paypal = useRef();

    useEffect (() =>{

window.paypal.Buttons({

    createOrder: (data, actions, arr) => {
        return actions.order.create({
            intent: "CAPTURE", 
            purchase_units: [
                {
                   description: "cool looking store",
                   amount: {
                    currency_code: "MXN",
                    value: 1999.00

                   } 
            }

            ]
        })
    },
onApprove: async (data, actions) =>{
         const order = await (actions.order.capture())
         console.log("succesfull order", order)
}, 

onError: (err) => {
    console.log(err);
}
}).render(paypal.current)
            
    }, [ ])

    return (
        <>

      <div ref={paypal}></div>


        </>
    )
}

export default PayPal;