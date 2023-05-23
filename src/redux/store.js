import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragonsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
});

export default store;
