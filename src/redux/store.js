import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});

export default store;
