import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlists: typeof window !== 'undefined' && localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem('wishlistItems') || '{}') : [],
        wishlistTotal: 0,
        wishlistTotalQuantity: 0
    },
    reducers: {
        addToWishlist: (state, { payload }) => {
            const itemIndex = state.wishlists?.findIndex(item => item._id === payload._id);

            if (itemIndex >= 0) {
                toast.error(`Already In Wishlist`, {
                    position: 'bottom-left'
                });
            } else {
                const newCart = { ...payload }
                state.wishlists.push(newCart)
                toast.success(`Product added to wishlists`, {
                    position: 'bottom-left'
                })
            }

            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlists));
        },
        getTotal: (state) => {
            let { total, quantity } = state.wishlists.reduce((cartTotal, cart) => {

                const { price, cartQuantity } = cart
                const itemTotal = price * cartQuantity
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
            state.wishlistTotal = total
            state.wishlistTotalQuantity = quantity
        },
        removeItem: (state, { payload }) => {
            const newItems = state.wishlists.filter(item => item._id !== payload)
            state.wishlists = newItems
            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlists));
            toast.error(`Product removed from wishlist`, {
                position: 'bottom-left'
            })
        },
        clearWishlist(state) {
            state.wishlists = []
            state.wishlistTotal = 0
            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlists));
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToWishlist, getTotal, removeItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;