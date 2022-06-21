import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #101010;
    --buttonRequest: #FF7400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   } 

   html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

   body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: #fff;
   }

   body, button, span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
   }

   button {
    cursor: pointer;
   }

   [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
   }
`
