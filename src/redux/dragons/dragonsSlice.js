import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragonData = createAsyncThunk(
  'dragons/fetchDragonData',
  async () => {
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();
      return data.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        flickrImage: dragon.flickr_images[0],
      }));
    }
    throw new Error('Failed to fetch dragon data');
  },
);

const initialState = {
  dragonsItems: [],
  loading: false,
  error: null,
};

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragonData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDragonData.fulfilled, (state, action) => {
        state.dragonsItems = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchDragonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dragonsSlice.reducer;
