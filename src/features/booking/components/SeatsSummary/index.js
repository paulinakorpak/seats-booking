import React from 'react';
import { ListGroup } from 'react-bootstrap';

function SeatsSummary() {
  return (
    <>
      <h4 className="text-center text-uppercase text-secondary">wybrane miejsca:</h4>
      <ListGroup className="mt-2 w-75">
        <ListGroup.Item variant="dark" className="p-2 d-flex justify-content-around">
          RZĄD
          <strong> x1 </strong>
          MIEJSCE
          <strong> y1 </strong>
        </ListGroup.Item>
        <ListGroup.Item variant="dark" className="p-2 d-flex justify-content-around">
          RZĄD
          <strong> x1 </strong>
          MIEJSCE
          <strong> y1 </strong>
        </ListGroup.Item>
        <ListGroup.Item variant="dark" className="p-2 d-flex justify-content-around">
          RZĄD
          <strong> x1 </strong>
          MIEJSCE
          <strong> y1 </strong>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default SeatsSummary;
