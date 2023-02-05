import { createGlobalStyle } from "styled-components"

const GlobalStyleStyled = createGlobalStyle`
    * {
      font-family: 'Montserrat', sans-serif;
      color: #FF6060;
      font-size: 24px;
    }
    *, ::before, ::after{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }

    body {
        margin: 0;
        background: #E5E5E5;
    }
    #root, body, html{
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .corps-de-page{
      flex-grow: 1;
      margin: 40px 100px;
      @media only screen and (max-width: 768px) {
          margin: 40px;
      }
      @media only screen and (max-width: 450px) {
          margin: 20px;
      }
      display: flex;
      flex-direction: column;
    }
`
export default function GlobalStyle() {
    return <GlobalStyleStyled />
}
