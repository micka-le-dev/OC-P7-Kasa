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
    const [currentPicture, setCurrentPicture] = useState(1)

    const nomberPictures = pictures.length
    const [isOneImage, setOneImage] = useState(nomberPictures === 1)
    const items = [pictures[nomberPictures - 1], ...pictures, pictures[0]]
    const nomberItems = items.length
    // const lastItem = nomberItems - 1
    const [currentItem, setCurrentItem] = useState(1)

    // const logState = (context, futurePicture = "", futureItem = "") =>
    //     console.log(
    //         "Carrousel --- " +
    //             context +
    //             " => picture : " +
    //             currentPicture +
    //             "/" +
    //             nomberPictures +
    //             (futurePicture ? ", futurePicture : " + futurePicture : "") +
    //             " ___  index item : " +
    //             currentItem +
    //             "/" +
    //             (nomberItems - 1) +
    //             (futureItem ? ", futureItem : " + futureItem : "")
    //     )
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
    // logState("composant")

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
                    alt={"flèche pour affichier l'image suivante"}
                />
            </NextBtn>
            <PrevBtn onClick={() => prev()} isOneImage={isOneImage}>
                <BackgroundImage
                    src={prevSVG}
                    alt={"flèche pour affichier l'image précedente"}
                />
            </PrevBtn>
            <NumPage>
                {currentPicture}/{pictures.length}
            </NumPage>
        </CarrouselWrapper>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel
