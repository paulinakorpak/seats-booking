import React from 'react';
import {
  Form, Col, Row, Button,
} from 'react-bootstrap';

function SeatsForm() {
  return (
    <Form className="d-flex flex-column justify-content-center">
      <Form.Group as={Row} className="mb-4">
        <Form.Label column>
          Liczba miejsc:
        </Form.Label>
        <Col>
          <Form.Control type="number" className="w-100" />
        </Col>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Check type="checkbox" label="Czy miejsca mają być obok siebie?" />
      </Form.Group>
      <Button type="submit" variant="outline-dark">
        Wybierz miejsca
      </Button>
    </Form>
  );
}

export default SeatsForm;
