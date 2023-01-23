import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sampReducer from '../features/counter/samp/sampSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    samp:sampReducer
  },
});
