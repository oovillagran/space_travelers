import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Dragon.css';

const Dragon = ({ dragon }) => {
  const { name, type, flickrImage } = dragon;

  return (
    <div className="dragon-container flex">
      <img
        className="img-dragon"
        src={flickrImage}
        alt={name}
      />
      <div className="props-container flex">
        <h2>{name}</h2>
        <div className="type-container flex">
          <button type="button" className="reserved">
            Reserved
          </button>
          <p className="txt-type">
            <strong>Type: </strong>
            {type}
          </p>
        </div>
        <button type="button" className="Reserve">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  dragon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dragon;
