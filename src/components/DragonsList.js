import React from 'react';
import Dragon from './Dragon';
import '../assets/DragonsList.css';

const DragonsList = () => (
  <>
    <div className="dragon-list flex">
      <Dragon />
      <Dragon />
      <Dragon />
    </div>
  </>
);

export default DragonsList;
