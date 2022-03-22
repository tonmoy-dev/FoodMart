import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Checkout from "../src/Components/Cart/Checkout";
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.stripe_public_key);

const Cart = () => {
  const [items, setItems] = useState([]);
  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.states.user);
  
  // private routing
    const router = useRouter();
    if (!user?.email) {
        router.push('/login');
    }


  // cart data
  useEffect(() => {
    setLoading(true);
    setControl(true);
      axios.get(`/api/cart?email=${user.email}`).then(response => {
        setItems(response.data);
        setLoading(false);
      });
  }, [control,user?.email]);
  
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
    });

    // Redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };
  return (
    <div>
      <Checkout items={items} control={control} setControl={setControl} loading={loading} setLoading={setLoading} createCheckoutSession={createCheckoutSession} />
    </div>
  );
};

export default Cart;
