import { Link } from "react-router-dom"
import styled from "styled-components"
import calculClampValues from "../../utils/styles/calculClampValues.js"

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    // gap: 182px;
    @media screen and (max-width: 768px) {
        // gap: 133px;
    }
`
const TitreStyled = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 66px;
    @media screen and (max-width: 768px) {
        gap: 11px;
    }
`
const CodeStyled = styled.span`
    font-style: normal;
    line-height: 142.6%;
    font-weight: 700;
    font-size: ${calculClampValues(768, 450, 288, 96)};
`

const ExcuseStyled = styled.span`
    margin: 0 57px;
    text-align: center;
    font-style: normal;
    line-height: 142.6%;
    font-weight: 500;
    font-size: ${calculClampValues(768, 450, 36, 18)};
`

const LinkStyled = styled(Link)`
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    &:hover {
        text-decoration: underline;
    }
`

function Error() {
    return (
        <Wrapper>
            <TitreStyled>
                <CodeStyled>404</CodeStyled>
                <ExcuseStyled>
                    Oups! La page que vous demandez n'existe pas.
                </ExcuseStyled>
            </TitreStyled>
            <LinkStyled to="/">Retourner sur la page d’accueil</LinkStyled>
        </Wrapper>
    )
}

export default Error
