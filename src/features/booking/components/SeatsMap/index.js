import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './styles';
import Seat from '../Seat';
import fetchSeats from '../../bookingAPI';
import { getLastSeatCoords, suggestSeats } from './helpers';
import Space from '../Space';
import { selectSeatsNumber, selectAdjacentSeats } from '../../bookingSlice';

function SeatsMap({ selectedSeats, setSelectedSeats }) {
  const [seats, setSeats] = useState([]);

  const seatsNumber = useSelector(selectSeatsNumber);
  const adjacentSeats = useSelector(selectAdjacentSeats);

  const [lastRow, lastCol] = getLastSeatCoords(seats);

  useEffect(() => {
    fetchSeats()
      .then((data) => {
        setSeats(data);
      });
  }, []);

  useEffect(() => {
    setSelectedSeats(suggestSeats(seatsNumber, adjacentSeats, lastRow, lastCol, seats));
  }, [seats]);

  const handleSeatClick = (seat) => {
    const alreadySelected = selectedSeats.find((item) => item.id === seat.id);

    if (!alreadySelected && selectedSeats.length < seatsNumber) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter((item) => item.id !== seat.id));
    }
  };

  const gridContent = [];

  let key = 0;
  for (let row = lastRow; row >= 0; row -= 1) {
    const rowContent = [];

    for (let col = 0; col <= lastCol; col += 1) {
      const seat = seats.find((item) => item.cords.x === col && item.cords.y === row);

      if (seat) {
        const selected = selectedSeats.some((item) => item.id === seat.id);

        rowContent.push(
          <Seat
            key={key}
            seat={seat}
            selected={selected}
            handleSeatClick={handleSeatClick}
          />,
        );
      } else {
        rowContent.push(
          <Space
            key={key}
          />,
        );
      }

      key += 1;
    }

    gridContent.push(<div key={row} className="d-flex justify-content-center">{rowContent}</div>);
  }

  return (
    <Container>
      {gridContent}
    </Container>
  );
}

export default SeatsMap;

SeatsMap.propTypes = {
  selectedSeats: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedSeats: PropTypes.func.isRequired,
};
