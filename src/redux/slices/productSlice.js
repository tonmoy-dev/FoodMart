import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCartProducts = createAsyncThunk(
    'product/fetchCartProducts',
    async (user) => {
        const response = await fetch(`api/compare?email=${user.email}`)
            .then(res => res.json())
        return response
    });
export const fetchCompareProducts = createAsyncThunk(
    'product/fetchCompareProducts',
    async (user) => {
        const response = await fetch(`api/compare?email=${user.email}`)
            .then(res => res.json())
        return response
    });
export const fetchWishlistProducts = createAsyncThunk(
    'product/fetchWishlistProducts',
    async (user) => {
        const response = await fetch(`api/compare?email=${user.email}`)
            .then(res => res.json())
        return response
    });

const productSlice = createSlice({
    name: 'product',
    initialState: {
        cartProducts: [],
        compareProducts: [],
        wishlistProducts: [],
        loading: true,
    
    },
    reducers: {
        /* addProducts: (state, { payload }) => {
            state.products.push(payload)
        },
        removeProducts: (state, { payload }) => {
            state.products = state.products.filter(product => product.id !== payload)
        }, */
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