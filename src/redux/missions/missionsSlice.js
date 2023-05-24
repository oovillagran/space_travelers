import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../../components/FetchMissions';

const initialState = {
  missions: [],
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }));
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
