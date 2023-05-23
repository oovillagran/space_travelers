import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRockets from './FetchRockets';
import '../styles/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets); // Access 'rockets' correctly
  const status = useSelector((state) => state.rockets.status); // Access 'status' correctly

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
            <p className="rocket-description">{rocket.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
