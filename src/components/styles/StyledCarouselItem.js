import styled from 'styled-components';

const StyledCarouselItem = styled.div`
  width: ${({ width }) => width};
  box-sizing: border-box;
  align-items: flex-end;
  position: relative;
  margin: 0 10px;

  .image-no-overlay {
    max-width: 266px;
    max-height: 400px;
    transition: all 0.2s ease-in-out;
  }

  .image-no-overlay:hover {
    transform: scale(1.08);
  }

  //...........................

  .image-with-overlay {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;

    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
  }
  .container {
    position: relative;
    width: 100%;
  }

  .container:hover .overlay {
    opacity: 0.4;
  }

  .hide {
    display: none;
  }

  .icon {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 10%;
    right: 5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    opacity: 1;
  }

  .icon:hover {
    color: red;
  }
`;

export default StyledCarouselItem;
