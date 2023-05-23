import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragonData } from '../redux/dragons/dragonsSlice';
import Dragon from './Dragon';
import '../assets/DragonsList.css';

const DragonsList = () => {
  const dispatch = useDispatch();
  const { dragonsItems, loading, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragonData());
  }, [dispatch]);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error}
      </p>
    );
  }

  return (
    <div className="dragon-list flex">
      {dragonsItems.map((dragon) => (
        <Dragon key={dragon.id} dragon={dragon} />
      ))}
    </div>
  );
};

export default DragonsList;
