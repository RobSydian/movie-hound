import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 1rem;

  &.addToList {
    background-color: gold;
    font-weight: bold;
  }

  &.addToList:hover {
    background-color: goldenrod;
  }

  &.removeFromList {
    background-color: #EE3838;
    font-weight: bold;
    color: white;
  }

  &.removeFromList:hover {
    background-color: #B41111;
  }
`;

export default StyledButton;
