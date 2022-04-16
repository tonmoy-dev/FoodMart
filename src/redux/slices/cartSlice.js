
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: typeof window !== 'undefined' && localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [],
        cartTotal: 0,
        cartTotalQuantity: 0,
        loading: true,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const itemIndex = state.cart?.findIndex(item => item._id === payload._id);

            if (itemIndex >= 0) {
                toast.error(`Already In cart`, {
                    position: 'bottom-left'
                });
            } else {
                const newCart = { ...payload }
                state.cart.push(newCart)
                toast.success(`Product added to cart`, {
                    position: 'bottom-left'
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        removeCartItem: (state, { payload }) => {
            const newItems = state.cart.filter(item => item._id !== payload)
            state.cart = newItems
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            toast.error(`Product removed from cart`, {
                position: 'bottom-left'
            })
        },
        clearCart(state) {
            state.cart = []
            state.cartTotal = 0
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        setloading: (state, { payload }) => {
            state.loading = payload;
        },
        /* increment: (state, { payload }) => {
            const itemIndex = state.cart.findIndex(item => item._id === payload._id)
            state.cart[itemIndex].cartQuantity += 1
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            toast.info(`${payload.title} quantity increased`, {
                position: 'bottom-left'
            })

        },
        decrement: (state, { payload }) => {
            const itemIndex = state.cart.findIndex(item => item._id === payload._id)
            state.cart[itemIndex].cartQuantity -= 1
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            toast.info("Decreased product quantity", {
                position: "bottom-left",
            });


        },
        getTotal: (state) => {
            let { total, quantity } = state.cart.reduce((cartTotal, cart) => {

                const { price, cartQuantity } = cart
                const itemTotal = price * cartQuantity
                console.log(itemTotal, 'redux itemTotal total');
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0
                }
            );
            total = parseFloat(total.toFixed(2))
            state.cartTotal = total
            state.cartTotalQuantity = quantity
        }, */
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;