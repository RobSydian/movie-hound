import styled from 'styled-components';

const StyledFooter = styled.div`
  header h1 {
    background: hsl(240, 18%, 40%);
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export default StyledFooter;
