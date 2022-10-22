import { createGlobalStyle } from "styled-components"
import px2vw from "./utils/px2vm";


export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff url(${''})no-repeat center top;    
    -webkit-font-smoothing: antialiased;
    border-radius: 5px;  
    
    
  }

  body, input, button {
    font: 12px Roboto, sans-serif;
   
    
     
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
    button{
    cursor: pointer;
  }
`;

