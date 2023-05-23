import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from './FetchMissions';

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
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>NOT A MEMBER</td>
            <td><button type="button">Join Mission</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Missions;
