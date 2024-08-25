import { configureStore } from '@reduxjs/toolkit';
import personalReducer from './personal-slice';

const store = configureStore({
  reducer: {
    personal: personalReducer,
  },
});

export default store;
