import styled from 'styled-components';

const StyledDropdownMenu = styled.div`
  .dropdown-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 2rem;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 10rem;
  }

  .dropdown-item {
    margin: 1rem;
    color: white;
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .dropdown-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 5rem;
      left: unset;
      right: 0;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.5);
      width: 10rem;
    }

    .dropdown-item {
      margin: 1rem;
      color: white;
      z-index: 999;
    }
  }
`;

export default StyledDropdownMenu;
