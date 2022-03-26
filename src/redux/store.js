import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import stateContainer from "./slices/stateSlice";

export const store = configureStore({
    reducer: {
    states: stateContainer,
    products: productSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }),
})