import styled from 'styled-components';

const StyledProductionCompaniesPanel = styled.div`
  padding: 0 10%;
  backdrop-filter: blur(5px);

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    width: 100px;
  }

  @media screen and (min-width: 992px) {
    img {
      width: ${({ companyWidth }) => companyWidth};
    }
  }
`;

export default StyledProductionCompaniesPanel;
