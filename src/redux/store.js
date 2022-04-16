import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import compareSlice from './slices/compareSlice';
import productSlice from './slices/productSlice';
import stateContainer from "./slices/stateSlice";
import wishlistSlice from './slices/wishlistSlice';

export const store = configureStore({
    reducer: {
    states: stateContainer,
    products: productSlice,
    wishlists: wishlistSlice,
    compareList: compareSlice,
    cartItems: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }),
})