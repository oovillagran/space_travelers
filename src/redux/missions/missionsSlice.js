import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../../components/FetchMissions';

const initialState = {
  missions: [],
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }));
  },
});

export default missionsSlice.reducer;
