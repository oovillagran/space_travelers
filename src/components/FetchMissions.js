import { createAsyncThunk } from '@reduxjs/toolkit';

const missionsURL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk('missions/fetch', async () => {
  const response = await fetch(missionsURL);
  const data = await response.json();
  return data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
});

export default fetchMissions;
