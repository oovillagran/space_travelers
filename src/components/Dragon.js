import React from 'react';
import '../assets/Dragon.css';

const Dragon = () => {
  // console.log('here');
  const name = 'Dragon 1';
  return (
    <div className="dragon-container flex">
      <img
        className="img-dragon"
        src="https://i.imgur.com/9fWdwNv.jpg"
        alt="Dragon"
      />
      <div className="props-container flex">
        <h2>{name}</h2>
        <div className="type-container flex">
          <button type="button" className="reserved">
            Reserved
          </button>
          <p className="txt-type">
            <strong>Type: </strong>
            capsule
          </p>
        </div>
        <button type="button" className="Reserve">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

export default Dragon;
