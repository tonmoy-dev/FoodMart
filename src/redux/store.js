import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import stateContainer from "./slices/stateSlice";

export const store = configureStore({
    reducer: {
    states: stateContainer,
    cartProducts:cartReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }),
})