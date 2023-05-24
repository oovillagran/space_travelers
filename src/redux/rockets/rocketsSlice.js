import { createSlice } from '@reduxjs/toolkit';
import getRockets from '../../components/FetchRockets';

function getSavedRockets() {
  const savedRockets = localStorage.getItem('savedRockets');
  return savedRockets ? JSON.parse(savedRockets) : [];
}

function saveRockets(rockets) {
  localStorage.setItem('savedRockets', JSON.stringify(rockets));
}

const initialState = {
  rockets: getSavedRockets(),
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
        rocket.rocket_id !== rocketId ? rocket : { ...rocket, reserved: true }
      ));
      saveRockets(newRockets);
      return { ...state, rockets: newRockets };
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload;
      const newRockets = state.rockets.map((rocket) => (
        rocket.rocket_id !== rocketId ? rocket : { ...rocket, reserved: false }
      ));
      saveRockets(newRockets);
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
        state.rockets = action.payload.map((rocket) => ({
          ...rocket,
          reserved:
          state.rockets.some((savedRocket) => savedRocket.rocket_id === rocket.rocket_id
          && savedRocket.reserved),
        }));
        saveRockets(state.rockets); // Save the merged rockets
      })
      .addCase(getRockets.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
