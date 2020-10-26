import { createGlobalStyle } from "styled-components";
import backgroundImage from './images/background.jpg';

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
    background: no-repeat center url(${backgroundImage});
    background-size: cover;
    height: 100vh;
    min-height: 676px;
  }
  
  * {
    font-family: cursive;
  }
  
  input, label {
    cursor: none;
  }
`;
