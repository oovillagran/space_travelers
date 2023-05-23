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
      {rockets.map((item, key) => (
        <h2 key={key}>{item.id}</h2>
      ))}
    </>
  );
}

export default Rockets;
