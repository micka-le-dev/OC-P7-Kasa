import { createGlobalStyle } from "styled-components"
import calculClampValues from "./calculClampValues.js"

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
        // background: #E5E5E5;
    }
    #root, body, html{
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .page{
      width:100;
      display: flex;
      flex-direction: column;
      align-items:center;
    }
    .colonne{
      max-width:2200px;
      width:100vw;
    }
    .corps-de-page{
      flex-grow: 1;
      margin: 20px 100px 40px;
      @media only screen and (max-width: 1000px) {
        margin: 40px;
        margin-top:${calculClampValues(1000, 450, 20, 0)};
      }
      @media only screen and (max-width: 450px) {
        margin: 20px;
        margin-top:${calculClampValues(1000, 450, 20, 0)};
      }
      display: flex;
      flex-direction: column;
    }
`
export default function GlobalStyle() {
    return <GlobalStyleStyled />
}
