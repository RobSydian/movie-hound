import styled from 'styled-components';

const StyledMyList = styled.div`
  h1 {
    margin: 2rem 0 0 2rem;
    padding: 2rem 0 0 2rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default StyledMyList;
