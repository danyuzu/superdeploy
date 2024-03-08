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
                    value: 1.00

                   } 
            }

            ]
        })
    },
    async onApprove(data, actions) {
        try {
          const response = await fetch(`/api/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          
          const orderData = await response.json();
          // Three cases to handle:
          //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
          //   (2) Other non-recoverable errors -> Show a failure message
          //   (3) Successful transaction -> Show confirmation or thank you message
          
          const errorDetail = orderData?.details?.[0];
          
          if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
            // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
            return actions.restart();
          } else if (errorDetail) {
            // (2) Other non-recoverable errors -> Show a failure message
            throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
          } else if (!orderData.purchase_units) {
            throw new Error(JSON.stringify(orderData));
          } else {
            // (3) Successful transaction -> Show confirmation or thank you message
            // Or go to another URL:  actions.redirect('thank_you.html');
            const transaction =
              orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
              orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
            resultMessage(
              `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
            );
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2),
            );
          }
        } catch (error) {
          console.error(error);
          resultMessage(
            `Sorry, your transaction could not be processed...<br><br>${error}`,
          );
        }
      },
}).render(paypal.current)
            
    }, [ ])

    return (
        <>

      <div ref={paypal}></div>


        </>
    )
}

export default PayPal;