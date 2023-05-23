import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragonsItems: [],
};

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
});

export default dragonsSlice.reducer;
