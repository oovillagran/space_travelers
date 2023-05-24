import { createSlice } from '@reduxjs/toolkit';
import getRockets from '../../components/FetchRockets';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const newRockets = state.rockets.map((rocket) => (
        rocket.rocket_id !== rocketId ? rocket : { ...rocket, reserved: true }));
      return { ...state, rockets: newRockets };
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload;
      const newRockets = state.rockets.map((rocket) => (
        rocket.rocket_id !== rocketId ? rocket : { ...rocket, reserved: false }));
      return { ...state, rockets: newRockets };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
