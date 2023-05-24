import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from './FetchMissions';
import { joinMission, leaveMision } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions?.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="mission-name">{mission.mission_name}</td>
            <td className="mission-description">{mission.description}</td>
            <td className="mission-status">
              {mission.reserved
                ? <p>Active Member</p>
                : <p>NOT A MEMBER</p>}
            </td>
            <td className="mission-join">
              {mission.reserved
                ? <button type="button" id="leave-mission" onClick={() => dispatch(leaveMision(mission.mission_id))}>Leave Mission</button>
                : <button type="button" onClick={() => dispatch(joinMission(mission.mission_id))}>Join Mission</button>}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Missions;
