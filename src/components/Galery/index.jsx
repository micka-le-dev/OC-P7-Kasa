import styled from "styled-components"
import CardGalery from "../CardGalery/index.jsx"
import { useFetch } from "../../utils/hooks/index"
import { Message } from "../../utils/styles/Atoms.jsx"

const Wrapper = styled.section`
    margin-top: 43px;
    padding: 50px;
    @media only screen and (max-width: 450px) {
        margin-top: 0;
        padding: 22px 0;
    }
    border-radius: 25px;
    background: #f7f7f7;
    @media only screen and (max-width: 680px) {
        background: transparent;
    }
`
const GaleryGrid = styled.div`
    margin: 0 auto;
    display: grid;
    gap: 50px;
    @media only screen and (max-width: 450px) {
        gap: 20px;
    }
    grid-template-columns: repeat(auto-fill, 340px);
    justify-content: center;
    place-items: center;
`

export default function Galery() {
    const { data: listLogements, isLoad, error } = useFetch("logements")

    if (isLoad)
        return (
            <Wrapper>
                <Message>Chargement de la galerie en cours...</Message>
            </Wrapper>
        )

    if (error)
        return (
            <Wrapper>
                <Message>
                    Oups! Une erreur est survenue lors de la récupération de la
                    galerie.
                </Message>
            </Wrapper>
        )

    return (
        <Wrapper>
            <GaleryGrid>
                {listLogements.map((logement) => (
                    <CardGalery
                        key={logement.id}
                        idLogement={logement.id}
                        title={logement.title}
                        picture={logement.cover}
                    />
                ))}
            </GaleryGrid>
        </Wrapper>
    )
}
