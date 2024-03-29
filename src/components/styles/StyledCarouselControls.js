import styled from 'styled-components';

const StyledCarouselControls = styled.div`
  display: flex;
  overflow: visible;
  justify-content: space-between;
  position: relative;
  top: 190px;

  & > button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    margin: 5px -1%;
    z-index: 1;
    cursor: pointer;
  }

  & > button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media screen and (min-width: 992px) {
    top: 250px;
  }
`;

export default StyledCarouselControls;
