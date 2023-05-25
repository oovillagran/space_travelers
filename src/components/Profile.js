import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const { dragonsItems } = useSelector((state) => state.dragons);
  const joinedDragons = dragonsItems.filter((dragon) => dragon.reserved === true);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
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
      <div>
        <h2>My Rockets</h2>
        <ul>
          { reservedRockets.length > 0 ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.rocket_id}>
                {rocket.rocket_name}
              </li>
            ))
          ) : (
            <li>no bookings</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
