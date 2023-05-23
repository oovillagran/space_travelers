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
      {missions?.map((mission) => (
        <div key={mission.mission_id}>
          <p>{mission.name}</p>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Missions;
