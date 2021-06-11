import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SeatsMap from '../../../features/booking/components/SeatsMap';
import {
  Wrapper, Footer, SeatType, Button,
} from './styles';
import { setBookedSeats, setNextStep } from '../../../features/booking/bookingSlice';

function SeatsPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (selectedSeats.length > 0) {
      dispatch(setBookedSeats(selectedSeats));
      dispatch(setNextStep());
    }
  };

  return (
    <Wrapper className="d-flex flex-column justify-content-center align-items-center">
      <SeatsMap
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
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
        <Button
          onClick={handleClick}
          variant="outline-secondary"
          className="align-self-center"
        >
          Rezerwuj
        </Button>
      </Footer>
    </Wrapper>
  );
}

export default SeatsPage;
