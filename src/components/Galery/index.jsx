import styled from "styled-components"
import listLogementsMoked from "../../mocks/logements.json"
import CardGalery from "../CardGalery/index.jsx"

const Wrapper = styled.section`
    margin-top: 43px;
    padding: 50px;
    background: #f7f7f7;
    border-radius: 25px;
`
const Error = styled.p`
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
    const listLogements = listLogementsMoked

    const error = !listLogements

    if (error)
        return (
            <Wrapper>
                <Error>
                    Oups! Une erreur est survenue lors de la récupération de la
                    galerie.
                </Error>
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
