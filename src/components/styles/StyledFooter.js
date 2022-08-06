import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  overflow-x: hidden;

  .logo-footer img {
    padding: 10px;
  }

  .footer-container ul {
    list-style-type: none;
    padding: 0;
  }
  .footer-container li {
    padding: 0.5rem;
  }

  .footer-container li a:hover,
  .privacy a:hover {
    color: ${({ theme }) => theme.colors.contrast};
  }

  .footer-container {
    color: ${({ theme }) => theme.colors.text};
  }

  address a {
    font-style: normal;
  }

  .contact-details-footer h3,
  .sitemap-footer h3 {
    /* text-align: center; */
    color: white;
  }

  .footer-container li a,
  a:visited,
  .privacy a {
    color: white;
    list-style: none;
    text-decoration: none;
  }

  .footer-container {
    padding: 1rem;
    margin: 0;
  }
  .logo-footer {
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .footer-element {
    text-align: center;
  }

  .sitemap-footer {
    /* background-color: red; */
  }

  .contact-details-footer {
    /* background-color: blue; */
  }

  .privacy {
    padding: 20px 0;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }

  @media screen and (min-width: 1200px) {
    .footer-element {
      padding: 5px;
    }

    .footer-container {
      padding: 10px 10px 0 10px;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2em;
      row-gap: 1em;
    }
    .logo-footer {
      /* background-color: green; */
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 1;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .sitemap-footer {
      /* background-color: red; */
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 1;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .contact-details-footer {
      /* background-color: blue; */
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 1;
      align-items: center;
      justify-content: center;
      padding: 0 30px;
    }

    .privacy {
      /* background-color: pink; */
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 2;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px 0;
    }
  }
`;

export default StyledFooter;
