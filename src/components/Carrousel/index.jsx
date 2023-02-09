import styled from "styled-components"
import PropTypes from "prop-types"
import { useState } from "react"

import nextSVG from "../../assets/Vector-next.svg"
import prevSVG from "../../assets/Vector-previous.svg"
import BackgroundImage from "../BackgroundImage/index.jsx"

// root .carousel 24:48
const CarrouselWrapper = styled.div`
    position: relative;
    aspect-ratio: 1240 / 415;
    border-radius: 25px;
    overflow: hidden;
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

const TextDebug = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    color: black;
`
function Carrousel({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(1)

    const nomberPictures = pictures.length
    const items = [pictures[nomberPictures - 1], ...pictures, pictures[0]]
    const nomberItems = items.length
    const lastItem = nomberItems - 1
    const [currentItem, setCurrentItem] = useState(1)

    const logState = (context, futurePicture = "", futureItem = "") =>
        console.log(
            context +
                " => picture : " +
                currentPicture +
                "/" +
                nomberPictures +
                (futurePicture ? ", futurePicture : " + futurePicture : "") +
                ",___  index item : " +
                currentItem +
                "/" +
                (nomberItems - 1) +
                (futureItem ? ", futureItem : " + futureItem : "")
        )
    const next = () => {
        const futurePicture =
            currentPicture >= nomberPictures ? 1 : currentPicture + 1
        const futureItem = futurePicture

        setCurrentPicture(futurePicture)
        setCurrentItem(futureItem)
    }
    const prev = () => {
        const futurePicture =
            currentPicture <= 1 ? nomberPictures : currentPicture - 1
        const futureItem = futurePicture

        setCurrentPicture(futurePicture)
        setCurrentItem(futureItem)
    }
    logState("composant")

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
                            <TextDebug>
                                index item {index}/{lastItem}
                            </TextDebug>
                        </CarrouselItem>
                    ))}
                </CarrouselContent>
            </CarrouselContainer>

            <NextBtn onClick={() => next()}>
                <BackgroundImage
                    src={nextSVG}
                    alt={"flèche pour affichier l'image suivante"}
                />
            </NextBtn>
            <PrevBtn onClick={() => prev()}>
                <BackgroundImage
                    src={prevSVG}
                    alt={"flèche pour affichier l'image précedente"}
                />
            </PrevBtn>
            <Text>
                {currentPicture}/{pictures.length}
            </Text>
        </CarrouselWrapper>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel
