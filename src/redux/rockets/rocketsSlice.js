import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  fetch(url).then((response) => response.json());
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: false,
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.loading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
    [getRockets.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default rocketsSlice.reducer;
