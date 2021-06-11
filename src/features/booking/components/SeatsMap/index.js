import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from './styles';
import Seat from '../Seat';
import fetchSeats from '../../bookingAPI';
import { getLastSeatCoords, suggestSeats } from './helpers';
import Space from '../Space';
import { selectSeatsNumber, selectAdjacentSeats } from '../../bookingSlice';

function SeatsMap() {
  const [seats, setSeats] = useState([]);
  const [selectedSeatIds, setSelectedSeatIds] = useState([]);

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
    setSelectedSeatIds(suggestSeats(seatsNumber, adjacentSeats, lastRow, lastCol, seats));
  }, [seats]);

  const handleSeatClick = (id) => {
    if (!selectedSeatIds.includes(id) && selectedSeatIds.length < seatsNumber) {
      setSelectedSeatIds([...selectedSeatIds, id]);
    } else {
      setSelectedSeatIds(selectedSeatIds.filter((selectedSeatId) => selectedSeatId !== id));
    }
  };

  const gridContent = [];

  let key = 0;
  for (let row = lastRow; row >= 0; row -= 1) {
    const rowContent = [];

    for (let col = 0; col <= lastCol; col += 1) {
      const seat = seats.find((item) => item.cords.x === col && item.cords.y === row);

      if (seat) {
        const selected = selectedSeatIds.includes(seat.id);

        rowContent.push(
          <Seat
            key={key}
            id={seat.id}
            reserved={seat.reserved}
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
