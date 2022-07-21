import styled from 'styled-components';

const StyledDropdownMenu = styled.div`
  .dropdown-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    width: 10rem;
  }

  .dropdown-item {
    margin: 1rem;
    color: white;
  }
`;

export default StyledDropdownMenu;
