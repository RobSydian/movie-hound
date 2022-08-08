import styled from 'styled-components';

const StyledUserRegistrationForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};
  flex-wrap: wrap;

  .formContainer {
    border: 1px solid gold;
    padding: 1.5rem 3rem;
    min-height: 40vh;
    text-align: center;
    margin: 5% 10%;
    border-radius: 5%;
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
    background-color: lightgrey;
    border: none;
    box-shadow: 0;
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.colors.secondary};
  }

  .btn-panel {
    display: flex;
    justify-content: center;
  }

  a {
    color: gold;
    text-decoration: none;
  }

  a:hover {
    color: goldenrod;
  }
`;

export default StyledUserRegistrationForm;
