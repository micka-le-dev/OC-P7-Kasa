import styled from "styled-components"

import logo from "../../assets/logo-blanc.svg"

const FooterStyled = styled.footer`
    padding: 66px 20px 29px;
    text-align: center;
    background: #000000;
`
const LogoStyled = styled.img`
    max-width: 122px;
`
const TextStyled = styled.p`
    color: white;
    @media only screen and (max-width: 375px) {
        font-size: 12px;
    }
`

function Footer() {
    return (
        <FooterStyled>
            <LogoStyled src={logo} alt="logo Kasa" />
            <TextStyled>© 2020 Kasa. All rights reserved</TextStyled>
        </FooterStyled>
    )
}

export default Footer
