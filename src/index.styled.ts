import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.text.primary}
  }

  ::placeholder {
    color: ${({ theme }) => theme.text.secondary}
  }

  a {
    text-decoration: none;
  }
`;
