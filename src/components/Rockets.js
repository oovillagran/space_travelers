import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const [rockets, loading] = useSelector((state) => state.rocket);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {rockets.map((rocket) => (
        <h2>{rocket.title}</h2>
      ))}
    </>
  );
}

export default Rockets;
