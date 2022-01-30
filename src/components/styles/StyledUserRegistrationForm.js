import styled from 'styled-components';

const StyledUserRegistrationForm = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};

  .formContainer {
    border: 1px solid yellow;
    padding: 3rem;
    min-height: 50vh;
  }

  h1 {
  }
`;

export default StyledUserRegistrationForm;
