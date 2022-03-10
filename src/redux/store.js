import { configureStore } from '@reduxjs/toolkit';
import stateContainer from "./slices/stateSlice";

export const store = configureStore({
    reducer: {
    states: stateContainer,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }),
})