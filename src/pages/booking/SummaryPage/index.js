import React from 'react';
import { Alert } from 'react-bootstrap';
import SeatsSummary from '../../../features/booking/components/SeatsSummary';

function SummaryPage() {
  return (
    <Alert
      variant="light"
      className="d-flex flex-column align-items-center justify-content-between align-self-center h-50"
      data-test="summary"
    >
      <Alert.Heading className="text-center">Twoja rezerwacja przebiegła pomyślnie!</Alert.Heading>
      <hr />
      <SeatsSummary />
      <hr />
      <p className="text-justify mt-4">
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </p>
    </Alert>

  );
}

export default SummaryPage;
