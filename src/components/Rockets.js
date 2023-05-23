import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRockets from './FetchRockets';

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
        <div key={rocket.rocket_id}>
          <h2>{rocket.rocket_name}</h2>
          <p>{rocket.rocket_type}</p>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images} alt="rocket_image" className="rocket_img" />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
