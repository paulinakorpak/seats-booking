import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, Col, Row, Button,
} from 'react-bootstrap';
import { setNextStep, setSeatsNumber, setAdjacentSeats } from '../../bookingSlice';
import { setMessage, clearMessage } from '../../../message/messageSlice';
import { NO_SEATS_NUMBER } from '../../../message/messageTypes';

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
      dispatch(clearMessage(NO_SEATS_NUMBER));
      dispatch(setNextStep());
    } else {
      dispatch(setMessage(NO_SEATS_NUMBER));
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
            data-test="seats-number-input"
          />
        </Col>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Check
          value={adjacent}
          onChange={handleAdjacentChange}
          type="checkbox"
          label="Czy miejsca mają być obok siebie?"
          data-test="seats-adjacent-checkbox"
        />
      </Form.Group>

      <Button
        type="submit"
        variant="outline-dark"
        data-test="seats-form-submit"
      >
        Wybierz miejsca
      </Button>
    </Form>
  );
}

export default SeatsForm;
