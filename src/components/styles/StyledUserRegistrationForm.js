import styled from 'styled-components';

const StyledUserRegistrationForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};

  .formContainer {
    border: 1px solid yellow;
    padding: 1.5rem 3rem;
    min-height: 50vh;
    text-align: center;
    margin: 0 10%;
  }

  .formInput {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .formInput label,
  .formInput input {
    width: 100%;
    margin: 0.5rem;
  }

  .formInput input {
    padding: 0.5rem;
    background-color: ghostwhite;
    border: none;
    border-radius: 0.5rem;
  }

  .formInput input:focus {
    background-color: ${({ theme }) => theme.colors.contrast};
    border: none;
    box-shadow: 0;
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.colors.secondary};
  }

  .primaryButton {
    background-color: green;
    color: ${({ theme }) => theme.colors.text};
  }

  .primaryButton:hover {
    background-color: darkgreen;
  }
`;

export default StyledUserRegistrationForm;
