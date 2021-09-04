import styled from 'styled-components';

const StyledBody = styled.div`
  .body-main {
  }
  header h1 {
    background: hsl(240, 18%, 40%);
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export default StyledBody;
