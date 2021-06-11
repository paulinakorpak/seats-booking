import React from 'react';
import Wrapper from './styles';
import FormPage from '../pages/booking/FormPage';
// import SeatsPage from '../pages/booking/SeatsPage';
// import SummaryPage from '../pages/booking/SummaryPage';

function App() {
  return (
    <Wrapper className="container-sm d-flex justify-content-center align-items-center">
      <FormPage />
      {/* <SeatsPage /> */}
      {/* <SummaryPage /> */}
    </Wrapper>
  );
}

export default App;
