import React from 'react';
import PropTypes from 'prop-types';
import Element from './styles';

function Seat({
  id, reserved, selected, handleSeatClick,
}) {
  const reservedClass = reserved ? 'reserved' : '';
  const selectedClass = selected ? 'selected' : '';
  const classNames = `${reservedClass} ${selectedClass}`;

  const handleClick = () => {
    if (!reserved) {
      handleSeatClick(id);
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
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  handleSeatClick: PropTypes.func.isRequired,
};
