import styled from "styled-components"
import CardGalery from "../CardGalery/index.jsx"
import { useFetch } from "../../utils/hooks/index"

const Wrapper = styled.section`
    margin-top: 43px;
    padding: 50px;
    background: #f7f7f7;
    border-radius: 25px;
`
const Message = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
`
const GaleryGrid = styled.div`
    margin: 0 auto;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(auto-fill, 340px);
    justify-content: center;
`

export default function Galery() {
    const { data: listLogements, isLoad, error } = useFetch("logements")

    console.log("Galery : listLogements", listLogements)
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
