import PropTypes from "prop-types"
import styled from "styled-components"
import BackgroundImage from "../BackgroundImage/index.jsx"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    width: 168px;
`
const Nom = styled.p`
    text-align: right;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    @media only screen and (max-width: 450px) {
        font-size: 12px;
    }
`
const Photo = styled.div`
    flex-shrink: 0;
    width: 64px;
    aspect-ratio: 1;
    @media only screen and (max-width: 450px) {
        width: 32px;
    }
    background: #c4c4c4;
    border-radius: 50%;
    overflow: hidden;
`
function Host({ name, picture }) {
    return (
        <Wrapper>
            <Nom>{name}</Nom>
            <Photo>
                <BackgroundImage
                    src={picture}
                    alt={`photo de profile de ${name}`}
                    isHeight={true}
                    isWidth={true}
                />
            </Photo>
        </Wrapper>
    )
}
Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default Host
