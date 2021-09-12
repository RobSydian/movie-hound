import styled from 'styled-components';

const StyledCarouselControls = styled.div`
  display: flex;
  overflow: visible;
  justify-content: space-between;
  position: relative;
  top: 140px;
  z-index: 1;

  & > button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    margin: 5px -1%;
  }
`;

export default StyledCarouselControls;
