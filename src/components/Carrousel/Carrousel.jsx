import styled from "styled-components"
import PropTypes from "prop-types"
import { useState } from "react"

import { BackgroundImg } from "../../utils/styles/Atoms.jsx"
import nextSVG from "../../assets/Vector-next.svg"
import prevSVG from "../../assets/Vector-previous.svg"

// root .carousel 24:48
const CarrouselWrapper = styled.div`
    position: relative;
    aspect-ratio: 1240 / 415;
    border-radius: 25px;
    overflow: hidden;
`
const CarrouselContainer = styled.div`
    width: ${(props) => props.nombrePictures * 100}%;
`
const CarrouselContent = styled.div`
    transition: transform 0.3s ease-in-out;
    transform: translateX(
        ${(props) => (-100 * props.currentPicture) / props.nombrePictures}%
    );
`
const CarrouselItem = styled.div`
    float: left;
    width: ${(props) => 100 / props.nombrePictures}%;
`
const Image = styled.img`
    display: block;
    aspect-ratio: 1240 / 415;
    width: 100%;
    object-fit: cover;
`

const NextBtn = styled.div`
    position: absolute;
    top: 37.5%;
    right: 1.85%;
    bottom: 43.12%;
    width: 47px;
    height: 80px;
`
const PrevBtn = styled.div`
    position: absolute;
    top: 37.5%;
    left: 1.85%;
    bottom: 43.12%;
    width: 47px;
    height: 80px;
`
const Text = styled.p`
    position: absolute;
    left: 48.95%;
    right: 49.11%;
    top: 86.19%;
    bottom: 6.01%;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    /* or 26px */

    display: flex;
    align-items: flex-end;
    text-align: center;

    color: #ffffff;
`

function Carrousel({ pictures }) {
    const [currentItem, setCurrentItem] = useState(0)
    const next = () => {
        const futureItem = currentItem + 1
        setCurrentItem(futureItem >= pictures.length ? 0 : futureItem)
    }
    const prev = () => {
        const futureItem = currentItem - 1
        setCurrentItem(futureItem < 0 ? pictures.length - 1 : futureItem)
    }

    return (
        <CarrouselWrapper>
            <CarrouselContainer nombrePictures={pictures?.length}>
                <CarrouselContent
                    currentPicture={currentItem}
                    nombrePictures={pictures?.length}
                >
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

            <NextBtn onClick={() => next()}>
                <BackgroundImg
                    src={nextSVG}
                    alt={"flèche pour affichier l'image suivante"}
                />
            </NextBtn>
            <PrevBtn onClick={() => prev()}>
                <BackgroundImg
                    src={prevSVG}
                    alt={"flèche pour affichier l'image précedente"}
                />
            </PrevBtn>
            <Text>
                {currentItem + 1}/{pictures.length}
            </Text>
        </CarrouselWrapper>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel
