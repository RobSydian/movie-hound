import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  size: ${({ theme }) => theme.fonts.textSize};
  color: black;

  &.addToList {
    background-color: gold;
    font-weight: bold;
  }

  &.addToList:hover {
    background-color: goldenrod;
  }

  &.removeFromList {
    background-color: #ee3838;
    font-weight: bold;
    color: white;
  }

  &.removeFromList:hover {
    background-color: #b41111;
  }

  &.watchDetails {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    font-weight: bold;
  }

  &.watchDetails:hover {
    background-color: ${({ theme }) => theme.colors.secondaryContrast};
  }

  &.primaryButton {
    background-color: green;
    color: ${({ theme }) => theme.colors.text};
  }

  &.primaryButton:hover {
    background-color: darkgreen;
  }

  &.secondaryButton {
    background-color: grey;
    color: ${({ theme }) => theme.colors.text};
  }

  &.secondaryButton:hover {
    background-color: darkgrey;
  }

  @media screen and (min-width: 992px) {
    margin: 1.5rem;
  }
`;

export default StyledButton;
