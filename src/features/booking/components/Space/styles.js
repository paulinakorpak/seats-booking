import styled from 'styled-components';

const Element = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  
  @media (min-width: 768px) {  
    width: 30px;
    height: 30px;
  }
`;

export default Element;
