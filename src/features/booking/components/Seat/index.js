import React from 'react';
import PropTypes from 'prop-types';
import Element from './styles';

function Seat({ reserved }) {
  const reservedClass = reserved ? 'reserved' : '';

  return (
    <Element type="button" className={reservedClass} />
  );
}

export default Seat;

Seat.propTypes = {
  reserved: PropTypes.bool.isRequired,
};
