import styled from "styled-components"
import PropTypes from "prop-types"

import { BackgroundImg } from "../../utils/styles/Atoms.jsx"

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
    left: 50%;
    transform: translate(-50%, -50%);

    font-weight: 500;
    font-size: 48px;
    color: #ffffff;
`

function Bandeau({ text, imageBG, altImage }) {
    return (
        <BandeauBackground>
            <BackgroundImg src={imageBG} alt={altImage} />
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
Bandeau.defaultProps = {
    idLogement: "id",
    title: "title",
    picture: "",
}
export default Bandeau
