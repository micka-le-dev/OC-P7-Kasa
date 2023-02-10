import styled from "styled-components"
import PropTypes from "prop-types"

import BackgroundImage from "../BackgroundImage/index.jsx"
import calculClampValues from "../../utils/styles/calculClampValues.js"

const Wrapper = styled.section`
    position: relative;
    border-radius: 25px;
    @media only screen and (max-width: 1000px) {
        border-radius: 10px;
    }
    overflow: hidden;
`
const VoileNoir = styled.div`
    position: absolute;
    z-index: -10;
    inset: 0;
    background: #000000;
    mix-blend-mode: darken;
    opacity: 0.3;
`
const TextWrapper = styled.div`
    width: 100%;
    min-height: 223px;
    @media only screen and (max-width: 1000px) {
        min-height: ${calculClampValues(1000, 500, 223, 111)};
    }
    display: grid;
    place-items: center;
`
const TextStyled = styled.p`
    text-align: center;
    @media only screen and (max-width: 1000px) {
        padding: 30px 50px 30px 16px;
        text-align: left;
        // font-size: 24px;
    }

    font-weight: 500;
    font-size: ${calculClampValues(1000, 450, 48, 24)};
    color: #ffffff;
`

function Bandeau({ text, imageBG, altImage }) {
    return (
        <Wrapper>
            <BackgroundImage src={imageBG} alt={altImage} />
            <VoileNoir />
            <TextWrapper>
                {text ? (
                    <TextStyled key="text-bandeau-ligne-0">{text}</TextStyled>
                ) : null}
            </TextWrapper>
        </Wrapper>
    )
}

Bandeau.propTypes = {
    text: PropTypes.string,
    imageBG: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
}

export default Bandeau
