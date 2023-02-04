import styled from "styled-components"
import calculClampValues from "../../utils/styles/calculClampValues.js"

import logo from "../../assets/logo-rouge.svg"

import { Link } from "react-router-dom"

const HeaderStyled = styled.header`
    margin: 40px 100px;
    @media only screen and (max-width: 768px) {
        margin: 40px;
    }
    @media only screen and (max-width: 450px) {
        margin: 20px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoStyled = styled.img`
    height: 68px;
    @media only screen and (max-width: 680px) {
        height: 47px;
    }
`

const LinkStyled = styled(Link)`
    margin-left: ${calculClampValues(410, 375, 29, 10)};
    font-size: ${calculClampValues(410, 375, 24, 16)};
`

function Header() {
    return (
        <HeaderStyled>
            <LogoStyled src={logo} alt="logo Kasa" />
            <nav>
                <LinkStyled to="/">Accueil</LinkStyled>
                <LinkStyled to="/apropos">À Propos</LinkStyled>
            </nav>
        </HeaderStyled>
    )
}

export default Header
