import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRockets from './FetchRockets';
import '../styles/Rocket.css';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets); // Access 'rockets' correctly
  const status = useSelector((state) => state.rockets.status); // Access 'status' correctly
  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };
  const handleCancelRocket = (rocketId) => {
    dispatch(cancelRocket(rocketId));
  };

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error occurred while fetching rockets.</div>;
  }

  return (
    <div>
      {rockets?.map((rocket) => (
        <div className="rocket flex" key={rocket.rocket_id}>
          <img className="rocket-img" src={rocket.flickr_images} alt="rocket_image" />
          <div className="rocket-information">
            <h2 className="rocket-name">{rocket.rocket_name}</h2>
            <h3 className="rocket-type">{rocket.rocket_type}</h3>
            {rocket.reserved ? (
              <p className="rocket-description">
                <button className="reserve-badge" type="button">reserved</button>
                {rocket.description}
              </p>
            ) : (
              <p className="rocket-description">{rocket.description}</p>
            )}
            {!rocket.reserved
              ? <button className="reserve-btn" type="button" onClick={() => handleReserveRocket(rocket.rocket_id)}>reserve rocket</button>
              : <button className="reserve-btn cancel" type="button" onClick={() => handleCancelRocket(rocket.rocket_id)}>cancel reservation</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
