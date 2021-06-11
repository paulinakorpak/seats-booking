import styled from 'styled-components';
import { Button as Btn } from 'react-bootstrap';

export const Wrapper = styled.div`
  margin: auto;
`;

export const Footer = styled.div`
  margin-top: 30px;
  height: 30px;
  flex-direction: column;
  
  @media (min-width: 768px) {  
    flex-direction: row;
  }
`;

export const SeatType = styled.div`
  margin-right: 20px;
  
  .symbol {
    min-width: 20px;
    min-height: 20px;
    border: 1px grey solid;
    margin-right: 10px;
    
    @media (min-width: 768px) {  
      min-width: 30px;
      min-height: 30px;
    }
  }
  
  .booked {
    background-color: grey;
  }
  
  .selected {
    background-color: orange;
  }
  
  .text {
    font-size: 8px;
  
    @media (min-width: 768px) {  
      font-size: 12px;  
    }
  }
`;

export const Button = styled(Btn)`
  width: 50%;
  margin-top: 30px;
  
  @media (min-width: 768px) {  
      width: 25%;  
      margin-top: 0;
    }
`;
