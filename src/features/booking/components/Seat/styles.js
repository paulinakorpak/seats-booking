import styled from 'styled-components';

const Element = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  border: 1px solid grey;
  cursor: pointer;
  
  &.reserved {
    background-color: grey;
    cursor: default;
  }
  
  &.selected {
    background-color: orange;
  }
  
  @media (min-width: 768px) {  
    width: 30px;
    height: 30px;
  }
`;

export default Element;
