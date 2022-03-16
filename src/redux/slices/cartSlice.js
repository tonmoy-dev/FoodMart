import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (user) => {
    const response = await fetch(`http://localhost:3000/api/cart?email=${user.email}`)
          .then(res => res.json())
  return response
})

const cartSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: true,
    
    },
    reducers: {
        addProducts: (state, { payload }) => {
            state.products.push(payload)
        },
        removeProducts: (state, { payload }) => {
            state.products = state.products.filter(product => product.id !== payload)
        },
        setloading: (state, { payload }) => {
            state.loading = payload;
        },
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.products = action.payload;
        })
    },
})


export const { addProducts,removeProducts, setloading, loading } = cartSlice.actions;

export default cartSlice.reducer;