import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { BackgroundImg } from "../../utils/styles/Atoms.jsx"

const LinkCard = styled(Link)`
    display: block;
    width: 340px;
    height: 340px;

    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: #ff6060;
`
const VoileSombre = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
    );
`
const Titre = styled.h3`
    position: absolute;
    bottom: 0;

    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;

    color: #ffffff;
`

function CardGalery({ idLogement, picture, title }) {
    return (
        <LinkCard to={`/logement/${idLogement}`}>
            <BackgroundImg src={picture} alt="logement" />
            <VoileSombre />
            <Titre>{title}</Titre>
        </LinkCard>
    )
}

CardGalery.propTypes = {
    idLogement: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
CardGalery.defaultProps = {
    idLogement: "id",
    title: "title",
    picture: "",
}

export default CardGalery
