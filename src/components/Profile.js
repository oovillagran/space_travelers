import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="my-profile">
      <div>
        <h2>My Missions</h2>
        <ul>
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
