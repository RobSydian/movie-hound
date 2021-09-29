import styled from 'styled-components';

const StyledProductionCompaniesPanel = styled.div`
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.2); */
  backdrop-filter: blur(5px);

  img {
    width: ${({ width }) => width};
  }
`;

export default StyledProductionCompaniesPanel;
