import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectBookedSeats } from '../../bookingSlice';

function SeatsSummary() {
  const bookedSeats = useSelector(selectBookedSeats);

  return (
    <>
      <h4 className="text-center text-uppercase text-secondary">wybrane miejsca:</h4>
      <ListGroup
        className="mt-2 w-75"
        data-test="seats-summary"
      >
        {
          bookedSeats.map((seat) => (
            <ListGroup.Item
              key={seat.id}
              variant="dark"
              className="p-2 d-flex justify-content-around"
            >
              RZĄD
              <strong>{seat.cords.y}</strong>
              MIEJSCE
              <strong>{seat.cords.x}</strong>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </>
  );
}

export default SeatsSummary;
