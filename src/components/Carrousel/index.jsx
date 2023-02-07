import styled from "styled-components"
import PropTypes from "prop-types"
import ClassCarrousel from "./Carrousel.js"

const Wrapper = styled.section`
    position: relative;
    border-radius: 25px;
    // overflow: hidden;
    aspect-ratio: 1240 / 415;
    background: #ff6060;
`
const Slider = styled.div`
    position: absolute;
    inset: 0;
    background: lightblue;
`
const Slides = styled.div``

const Image = styled.img`
    display: block;
    max-width: 300px; //tmp
    width: 100%;
    object-fit: cover;
    float: left;
`
// const VoileSombre = styled.div`
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//         180deg,
//         rgba(255, 255, 255, 0) 0%,
//         rgba(0, 0, 0, 0.5) 100%
//     );
// `
// const TextStyled = styled.p`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);

//     font-weight: 500;
//     font-size: 48px;
//     color: #ffffff;
// `

function Carousel({ pictures }) {
    new ClassCarrousel()
    return (
        <Wrapper>
            <Slider>
                <Slides>
                    {pictures?.map((picture, index) => (
                        <Image
                            key={`carrousel-${index}`}
                            src={picture}
                            alt={"interieur du logement"}
                        />
                    ))}
                </Slides>
            </Slider>
        </Wrapper>
    )
}

Carousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carousel
