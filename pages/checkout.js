import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
  const email = {
    email: "rx@gmail.com",
  };
  const items = [
    {
      title: "Food_Product",
      image: "https://i.ibb.co/2WdSM6X/product-2-1.jpg",
      price: 50,
      description: "It is a good product. Fresh food.",
    },
  ];
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
      <button onClick={createCheckoutSession} role="link" type="submit">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
