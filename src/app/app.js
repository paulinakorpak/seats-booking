import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from './styles';
import FormPage from '../pages/booking/FormPage';
import SeatsPage from '../pages/booking/SeatsPage';
import SummaryPage from '../pages/booking/SummaryPage';
import { selectStep } from '../features/booking/bookingSlice';
import { FORM_STEP, MAP_STEP, SUMMARY_STEP } from '../features/booking/bookingSteps';

function App() {
  const step = useSelector(selectStep);

  return (
    <Wrapper className="container-sm d-flex justify-content-center align-items-center">
      { step === FORM_STEP && <FormPage /> }
      { step === MAP_STEP && <SeatsPage /> }
      { step === SUMMARY_STEP && <SummaryPage /> }
    </Wrapper>
  );
}

export default App;
