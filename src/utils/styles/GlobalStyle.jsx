import { createGlobalStyle } from "styled-components"

const GlobalStyleStyled = createGlobalStyle`
    * {
      font-family: 'Montserrat', sans-serif;
      color: #FF6060;
      font-size: 24px;
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
      display: flex;
      flex-direction: column;
    }
`
export default function GlobalStyle() {
    return <GlobalStyleStyled />
}
