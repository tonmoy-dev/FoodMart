import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./cart";

const stripePromise = loadStripe(process.env.stripe_public_key);
const Checkout = () => {
  const [items, setItems] = useState([]);
  const email = {
    email: "rx@gmail.com",
  };
  useEffect(() => {
    axios.get('http://localhost:3000/api/cart').then(response => {
      setItems(response.data);
    });
  }, []);
  
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: email.email,
    });

    // Redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };
  return (
    <div>
      <Cart createCheckoutSession={createCheckoutSession}></Cart>
    </div>
  );
};

export default Checkout;
