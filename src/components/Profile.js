import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const { dragonsItems } = useSelector((state) => state.dragons);
  const joinedDragons = dragonsItems.filter((dragon) => dragon.reserved === true);

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
      {joinedDragons.length > 0 ? (
        <div>
          <h2>My Dragons</h2>
          <ul>
            {joinedDragons.map((dragon) => (
              <li key={dragon.id}>
                {dragon.name}
              </li>
            ))}
          </ul>
        </div>
      ) : <div />}
    </div>
  );
};

export default Profile;
