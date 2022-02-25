import moment from 'moment';
import db from '../src/Authenticaion/Firebase/firebase.config';

const Orders = (orders) => {
    const [session] = useSession();

    return (
        <div>
            <main className="max-w-screen-lg">
                <h1>Your Orders</h1>

                {session ? (
                    <h2>Orders</h2>
                ) : (
                    <h2>Please Login</h2>
                )}
                <div>

                    {orders?.map(({
                     id,amount,amountShipping,items,timestamp,images
                    })=> {
                        <Order
                            key={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    })}
                </div>
            </main>
        </div>
    );
};

export default Orders ;


export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // GET THE users logged in credentials
    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        }
    }

    // firebase db
    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();
    
    //  stipe orders 
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: {
                await: stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            }.data,
            
        }))
    )
    return {
        props: {
            orders
        }
    }
}