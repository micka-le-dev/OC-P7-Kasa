import styled from "styled-components"
// import calculClampValues from "../../utils/styles/calculClampValues.js"

import imageBG from "../../assets/bandeau-accueil.jpg"

const BandeauBackground = styled.section`
    position: relative;
    border-radius: 25px;
    overflow: hidden;
`
const Background = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
`
const VoileNoir = styled.div`
    position: absolute;
    inset: 0;
    background: #000000;
    mix-blend-mode: darken;
    opacity: 0.3;
`
const TextStyled = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-weight: 500;
    font-size: 48px;
    color: #ffffff;
`

export default function BandeauHome() {
    return (
        <BandeauBackground>
            <Background
                src={imageBG}
                alt="rochers avec arbres en bord de mer"
            />
            <VoileNoir />
            <TextStyled>Chez vous, partout et ailleurs</TextStyled>
        </BandeauBackground>
    )
}
