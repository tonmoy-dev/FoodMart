import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCartProducts = createAsyncThunk(
    '/product/fetchCartProducts',
    async (user) => {
        const response = await fetch(`/api/cart?email=${user.email}`)
            .then(res => res.json())
        return response
    });
export const fetchCompareProducts = createAsyncThunk(
    '/product/fetchCompareProducts',
    async (user) => {
        const response = await fetch(`/api/compare?email=${user.email}`)
            .then(res => res.json())
        return response
    });
export const fetchWishlistProducts = createAsyncThunk(
    '/product/fetchWishlistProducts',
    async (user) => {
        const response = await fetch(`/api/wishlists?email=${user.email}`)
            .then(res => res.json())
        return response
    });

const productSlice = createSlice({
    name: 'product',
    initialState: {
        cartProducts: [],
        compareProducts: [],
        wishlistProducts: [],
        loading: false,
        errorMessage: ""
    
    },
    reducers: {
        setloading: (state, { payload }) => {
            state.loading = payload;
        },
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.cartProducts = action.payload;
        }),
        builder.addCase(fetchCartProducts.rejected, (state, action) => {
            // Add user to the state array
            // state.cartProducts = action.payload;
            action.errorMessage = action.error.message || ""
        }),
        builder.addCase(fetchCompareProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.compareProducts = action.payload;
        }),
        builder.addCase(fetchWishlistProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.wishlistProducts = action.payload;
        })
    },
})

export const { setloading, loading } = productSlice.actions;

export default productSlice.reducer;