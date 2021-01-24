import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  // const publishableKey = 'pk_test_51Hn577JiDNmgx0m84YhGq2TYsIqqr0G9lk0nnvatwuXoUFDbZYr7fVIGBMZ6HGrKCuZz3A5A0vmHzZgqi7bDdtqN00QSAJ8B4h'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
    label='Pay Now'
    name='Royal Sky'
    billingAddress
    shippingAddress
    image='https://sendeyo.com/up/d/f3eb2117da'
    description={`Your total is $${price}`}
    amount={priceForStripe} 
    panelLabel='Pay Now'
    token={onToken}
    />
  )
}

export default StripeCheckoutButton