import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map((rocket) => ({
    rocket_id: rocket.rocket_id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    rocket_type: rocket.rocket_type,
    flickr_images: rocket.flickr_images,
    reserved: false,
  }));
});

export default getRockets;
