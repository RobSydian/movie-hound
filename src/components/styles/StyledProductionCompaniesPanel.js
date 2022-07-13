import styled from 'styled-components';

const StyledProductionCompaniesPanel = styled.div`
  padding: 0 10%;
  backdrop-filter: blur(5px);

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img {
    width: ${({ width }) => width};
  }


`;

export default StyledProductionCompaniesPanel;
