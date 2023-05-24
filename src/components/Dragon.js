import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Dragon.css';
import { useDispatch } from 'react-redux';
import { reserveDragon, canelDragon } from '../redux/dragons/dragonsSlice';

const Dragon = ({ dragon }) => {
  const {
    id, name, type, flickrImage, reserved,
  } = dragon;
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveDragon(id));
  };

  const handleCancel = () => {
    dispatch(canelDragon(id));
  };

  return (
    <div className="dragon-container flex">
      <img
        className="img-dragon"
        src={flickrImage}
        alt={name}
      />
      <div className="props-container flex">
        <h2 className="dragon-name">{name}</h2>
        <div className="type-container flex">
          {reserved
            ? (
              <p className="reserved">
                Reserved
              </p>
            )
            : ' '}
          <p className="txt-type">
            <strong>Type: </strong>
            {type.toUpperCase()}
          </p>
        </div>
        <button
          type="button"
          onClick={reserved ? handleCancel : handleReserve}
          className={reserved ? 'reserve unreserve' : 'reserve'}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Dragon;
