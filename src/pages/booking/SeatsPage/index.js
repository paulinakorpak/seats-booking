import React, { useState } from 'react';
import SeatsMap from '../../../features/booking/components/SeatsMap';
import {
  Wrapper, Footer, SeatType, Button,
} from './styles';

function SeatsPage() {
  const [selectedSeatIds, setSelectedSeatIds] = useState([]);

  return (
    <Wrapper className="d-flex flex-column justify-content-center align-items-center">
      <SeatsMap
        selectedSeatIds={selectedSeatIds}
        setSelectedSeatIds={setSelectedSeatIds}
      />
      <Footer className="d-flex">
        <div className="d-flex justify-content-between">
          <SeatType className="d-flex align-items-center">
            <div className="symbol" />
            <div className="text">Dostępne</div>
          </SeatType>
          <SeatType className="d-flex align-items-center">
            <div className="symbol booked" />
            <div className="text">Zarezerwowane</div>
          </SeatType>
          <SeatType className="d-flex align-items-center">
            <div className="symbol selected" />
            <div className="text">Wybrane</div>
          </SeatType>
        </div>
        <Button variant="outline-secondary" className="align-self-center">Rezerwuj</Button>
      </Footer>
    </Wrapper>
  );
}

export default SeatsPage;
