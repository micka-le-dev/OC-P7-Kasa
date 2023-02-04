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
`
export default function GlobalStyle() {
    return <GlobalStyleStyled />
}
