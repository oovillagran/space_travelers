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
  reducers: {},
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

export default rocketsSlice.reducer;