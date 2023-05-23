import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(url);
  return response.json();
});

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
