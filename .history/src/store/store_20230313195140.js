import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      basket: basketReducer,
    },
  });
  
} 
export const store = makeStore()