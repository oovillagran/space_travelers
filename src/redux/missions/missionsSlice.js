import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionsSlice.reducer;
