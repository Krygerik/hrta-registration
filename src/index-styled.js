import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f4f3f3;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    z-index: 0;
    cursor: none;
    user-select: none;
  }
  
  * {
    font-family: cursive;
  }
  
  input, label {
    cursor: none;
  }
`;
