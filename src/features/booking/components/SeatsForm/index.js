import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, Col, Row, Button,
} from 'react-bootstrap';
import { setSeatsNumber, setAdjacentSeats } from '../../bookingSlice';

function SeatsForm() {
  const [number, setNumber] = useState('');
  const [adjacent, setAdjacent] = useState(false);

  const dispatch = useDispatch();

  const handleNumberChange = (e) => setNumber(e.target.value && parseInt(e.target.value, 10));
  const handleAdjacentChange = (e) => setAdjacent(e.target.checked);

  const handleSubmit = (e) => {
    if (number > 0) {
      dispatch(setSeatsNumber(number));
      dispatch(setAdjacentSeats(adjacent));
    }

    e.preventDefault();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center"
    >
      <Form.Group as={Row} className="mb-4">
        <Form.Label column>
          Liczba miejsc:
        </Form.Label>
        <Col>
          <Form.Control
            value={number}
            onChange={handleNumberChange}
            placeholder="0"
            type="number"
            className="w-100"
          />
        </Col>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Check
          value={adjacent}
          onChange={handleAdjacentChange}
          type="checkbox"
          label="Czy miejsca mają być obok siebie?"
        />
      </Form.Group>

      <Button type="submit" variant="outline-dark">
        Wybierz miejsca
      </Button>
    </Form>
  );
}

export default SeatsForm;
