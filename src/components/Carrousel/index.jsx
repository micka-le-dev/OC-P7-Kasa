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
    // overflow: hidden;
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
        const futurePicture = currentPicture + 1
        const futureItem = futurePicture < 0 ? lastItem : futurePicture

        logState("next", futurePicture, futureItem)
        setCurrentPicture(futurePicture > nomberPictures ? 1 : futurePicture)
        setCurrentItem(futureItem)

        // attendre la fin de l'animation pour faire setCurrentItem(??)
        // supprimer l'animation pour donner l'illusion d'une infinité d'images
        if (futureItem == lastItem)
            setTimeout(() => {
                setCurrentItem(1)
                logState("setTimeout : next -> " + 1)
            }, 1000)
    }
    const prev = () => {
        const futurePicture = currentPicture - 1
        const futureItem = futurePicture < 0 ? lastItem : futurePicture
        logState("prev", futurePicture, futureItem)
        setCurrentPicture(futurePicture < 1 ? nomberPictures : futurePicture)
        setCurrentItem(futureItem)

        if (futureItem == 0)
            // attendre la fin de l'animation pour faire setCurrentItem(??)
            // supprimer l'animation pour donner l'illusion d'une infinité d'images
            setTimeout(() => {
                setCurrentItem(lastItem - 1)
                logState("setTimeout : prev -> " + (lastItem - 1))
            }, 1000)
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
                                index item {index}/{nomberItems - 1}
                            </TextDebug>
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
                {currentPicture}/{pictures.length}
            </Text>
        </CarrouselWrapper>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel
