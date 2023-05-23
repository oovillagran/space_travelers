import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragonsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
