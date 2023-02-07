import styled from "styled-components"
import PropTypes from "prop-types"

const CarrouselWrapper = styled.div`
    position: relative;
    aspect-ratio: 1240 / 415;
    border-radius: 25px;
    background: #ff6060;
    // overflow: hidden;
`
const CarrouselContainer = styled.div`
    width: ${(props) => props.nombrePictures * 100}%;
`
const CarrouselContent = styled.div``
const CarrouselItem = styled.div`
    float: left;
    width: ${(props) => 100 / props.nombrePictures}%;
    border: solid 1px black;
`
const Image = styled.img`
    display: block;
    aspect-ratio: 1240 / 415;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
`

function Carrousel({ pictures }) {
    return (
        <CarrouselWrapper>
            <CarrouselContainer nombrePictures={pictures?.length}>
                <CarrouselContent>
                    {pictures?.map((picture, index) => (
                        <CarrouselItem
                            key={`carrousel-${index}`}
                            nombrePictures={pictures?.length}
                        >
                            <Image
                                src={picture}
                                alt={"interieur du logement"}
                            />
                        </CarrouselItem>
                    ))}
                </CarrouselContent>
            </CarrouselContainer>
        </CarrouselWrapper>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel
