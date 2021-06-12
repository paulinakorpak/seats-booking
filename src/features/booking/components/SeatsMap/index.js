import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './styles';
import Seat from '../Seat';
import fetchSeats from '../../bookingAPI';
import { getLastSeatCoords, suggestSeats } from './helpers';
import Space from '../Space';
import { selectSeatsNumber, selectAdjacentSeats } from '../../bookingSlice';
import { setMessage, clearMessage } from '../../../message/messageSlice';
import { ALL_SEATS_SELECTED, NO_SEATS_SELECTED, SUGGESTION_NOT_POSSIBLE } from '../../../message/messageTypes';

function SeatsMap({ selectedSeats, setSelectedSeats }) {
  const [seats, setSeats] = useState([]);

  const dispatch = useDispatch();

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
    if (seats.length > 0) {
      const suggestedSeats = suggestSeats(seatsNumber, adjacentSeats, lastRow, lastCol, seats);
      setSelectedSeats(suggestedSeats);

      if (suggestedSeats.length === 0) {
        dispatch(setMessage(SUGGESTION_NOT_POSSIBLE));
      }
    }
  }, [seats]);

  const handleSeatClick = (seat) => {
    const alreadySelected = selectedSeats.find((item) => item.id === seat.id);

    if (!alreadySelected) {
      if (selectedSeats.length < seatsNumber) {
        setSelectedSeats([...selectedSeats, seat]);
      } else {
        dispatch(setMessage(ALL_SEATS_SELECTED));
      }
    } else {
      setSelectedSeats(selectedSeats.filter((item) => item.id !== seat.id));
      dispatch(clearMessage(ALL_SEATS_SELECTED));
    }

    dispatch(clearMessage(NO_SEATS_SELECTED));
    dispatch(clearMessage(SUGGESTION_NOT_POSSIBLE));
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
