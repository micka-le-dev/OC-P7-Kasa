import styled from "styled-components"
import PropTypes from "prop-types"
import { useState } from "react"

import nextSVG from "../../assets/Vector-next.svg"
import prevSVG from "../../assets/Vector-previous.svg"
import BackgroundImage from "../BackgroundImage/index.jsx"
import calculClampValues from "../../utils/styles/calculClampValues.js"

const CarrouselWrapper = styled.section`
    position: relative;
    aspect-ratio: 1240 / 415;
    @media only screen and (max-width: 680px) {
        aspect-ratio: 335/255;
    }
    border-radius: 25px;
    overflow: hidden;
    background: #f7f7f7;
`
const CarrouselContainer = styled.div`
    width: ${(props) => props.nomberItems * 100}%;
`
const CarrouselContent = styled.div`
    transition: transform 0.3s ease-in-out;
    transform: translateX(
        ${(props) => (-100 * props.currentItem) / props.nomberItems}%
    );
`
const CarrouselItem = styled.div`
    float: left;
    width: ${(props) => 100 / props.nomberItems}%;
`
const Image = styled.img`
    display: block;
    aspect-ratio: 1240 / 415;
    @media only screen and (max-width: 680px) {
        aspect-ratio: 335/255;
    }
    width: 100%;
    object-fit: cover;
`

const NextBtn = styled.div`
    ${(props) => (props.isOneImage ? "display:none;" : null)}
    position: absolute;
    z-index: 10;
    right: 1.85%;
    top: 50%;
    transform: translateY(-50%);
    aspect-ratio: 47/80;
    height: ${calculClampValues(1100, 375, 80, 20)};

    cursor: pointer;
`
const PrevBtn = styled.div`
    ${(props) => (props.isOneImage ? "display:none;" : null)}
    position: absolute;
    z-index: 10;
    left: 1.85%;
    top: 50%;
    transform: translateY(-50%);
    aspect-ratio: 47/80;
    height: ${calculClampValues(1100, 375, 80, 20)};

    cursor: pointer;
`
const NumPage = styled.p`
    @media only screen and (max-width: 450px) {
        display: none;
    }
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
    const items = pictures
    const nomberItems = items.length
    const lastItem = nomberItems - 1
    const [isOneImage] = useState(nomberItems === 1)
    const [currentItem, setCurrentItem] = useState(0)

    const next = () => {
        const futureItem = currentItem >= lastItem ? 0 : currentItem + 1
        setCurrentItem(futureItem)
    }
    const prev = () => {
        const futureItem = currentItem <= 0 ? lastItem : currentItem - 1
        setCurrentItem(futureItem)
    }

    return (
        <CarrouselWrapper>
            <CarrouselContainer nomberItems={nomberItems}>
                <CarrouselContent
                    currentItem={currentItem}
                    nomberItems={nomberItems}
                >
                    {items.map((item, index) => (
                        <CarrouselItem
                            key={`carrousel-${index}`}
                            nomberItems={nomberItems}
                        >
                            <Image src={item} alt={"interieur du logement"} />
                        </CarrouselItem>
                    ))}
                </CarrouselContent>
            </CarrouselContainer>

            <NextBtn onClick={() => next()} isOneImage={isOneImage}>
                <BackgroundImage
                    isAbsolute={false}
                    src={nextSVG}
                    alt={"fl??che pour affichier l'image suivante"}
                />
            </NextBtn>
            <PrevBtn onClick={() => prev()} isOneImage={isOneImage}>
                <BackgroundImage
                    src={prevSVG}
                    alt={"fl??che pour affichier l'image pr??cedente"}
                />
            </PrevBtn>
            <NumPage>
                {currentItem + 1}/{pictures.length}
            </NumPage>
        </CarrouselWrapper>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel
