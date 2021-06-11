import React, { useEffect, useState } from 'react';
import Container from './styles';
import Seat from '../Seat';
import fetchSeats from '../../bookingAPI';
import getLastSeatCoords from './helpers';
import Space from '../Space';

function SeatsMap() {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    fetchSeats()
      .then((data) => {
        setSeats(data);
      });
  }, []);

  const gridContent = [];
  const [lastRow, lastCol] = getLastSeatCoords(seats);

  let key = 0;
  for (let row = lastRow; row >= 0; row -= 1) {
    const rowContent = [];

    for (let col = 0; col <= lastCol; col += 1) {
      const seat = seats.find((item) => item.cords.x === col && item.cords.y === row);

      if (seat) {
        rowContent.push(<Seat key={key} reserved={seat.reserved} />);
      } else {
        rowContent.push(<Space key={key} />);
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
