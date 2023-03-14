import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import basketReducer from '../slices/basketSlice';

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  enhancers: [composeWithDevTools()],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
