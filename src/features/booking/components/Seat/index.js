import React from 'react';
import PropTypes from 'prop-types';
import Element from './styles';

function Seat({
  seat, selected, handleSeatClick,
}) {
  const reservedClass = seat.reserved ? 'reserved' : '';
  const selectedClass = selected ? 'selected' : '';
  const classNames = `${reservedClass} ${selectedClass}`;

  const handleClick = () => {
    if (!seat.reserved) {
      handleSeatClick(seat);
    }
  };

  return (
    <Element
      type="button"
      className={classNames}
      onClick={handleClick}
    />
  );
}

export default Seat;

Seat.propTypes = {
  seat: PropTypes.objectOf(PropTypes.any).isRequired,
  selected: PropTypes.bool.isRequired,
  handleSeatClick: PropTypes.func.isRequired,
};
