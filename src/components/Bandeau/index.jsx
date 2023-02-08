import styled from "styled-components"
import PropTypes from "prop-types"

import BackgroundImage from "../BackgroundImage/index.jsx"

const BandeauBackground = styled.section`
    position: relative;
    border-radius: 25px;
    overflow: hidden;
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
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    @media only screen and (max-width: 1000px) {
        padding: 0 16px;
        text-align: left;
        font-size: 24px;
    }

    font-weight: 500;
    font-size: 48px;
    color: #ffffff;
`

function Bandeau({ text, imageBG, altImage }) {
    return (
        <BandeauBackground>
            <BackgroundImage src={imageBG} alt={altImage} />
            <VoileNoir />
            {text ? <TextStyled>{text}</TextStyled> : null}
        </BandeauBackground>
    )
}

Bandeau.propTypes = {
    text: PropTypes.string,
    imageBG: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
}

export default Bandeau
