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
      const newState = state.missions.filter((mission) => {
        if (mission.mission_id === action.payload) {
          mission.reserved = true;
          return mission;
        } return mission;
      });
      state.missions = newState;
    },
    leaveMision: (state, action) => {
      const newState = state.missions.filter((mission) => {
        if (mission.mission_id === action.payload) {
          mission.reserved = false;
          return mission;
        } return mission;
      });
      state.missions = newState;
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

export const { joinMission, leaveMision } = missionsSlice.actions;

export default missionsSlice.reducer;
