import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
  reducer: {
    basket: basketReducer,
  },
});

const wrapper = createWrapper(makeStore);

export default wrapper;
