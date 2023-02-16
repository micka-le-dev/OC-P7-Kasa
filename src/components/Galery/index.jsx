import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import styled from "styled-components"
import CardGalery from "../CardGalery/index.jsx"
import { useFetch } from "../../utils/hooks/index"
import { Message } from "../../utils/styles/Atoms.jsx"

const Wrapper = styled.section`
    margin-top: 43px;
    padding: 50px;
    @media only screen and (max-width: 450px) {
        padding: 22px 0;
    }
    border-radius: 25px;
    background: #f7f7f7;
    @media only screen and (max-width: 680px) {
        margin-top: 0;
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
    const navigate = useNavigate()

    useEffect(() => {
        if (error) {
            navigate("/error")
        }
    }, [error, navigate])

    if (isLoad || error)
        return (
            <Wrapper>
                <Message>Chargement de la galerie en cours...</Message>
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
