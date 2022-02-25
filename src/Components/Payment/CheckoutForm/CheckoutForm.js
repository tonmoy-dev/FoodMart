import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ product }) => {
    const { price } = product;
    console.log(price)
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

 
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
    }, []);
    
    /* useEffect(() => {
        fetch('https://foodmart-server.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => console.log(data));
    },[price]) */
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!stripe || !elements) {
            return;
        }
        
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error){
            setError(error.message);
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button className="text-base bg-green-500 text-white py-2 px-3 rounded font-semibold" type="submit" disabled={!stripe}>
                    Pay ${product.price}
                </button>
            </form>

            {
                error && <p className="text-red-500 font-semibold text-xl my-6">{error}</p>
            }
        </div>
    );
};

export default CheckoutForm ;