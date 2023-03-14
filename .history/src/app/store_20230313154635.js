import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';

const makeStore = () => configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default makeStore
