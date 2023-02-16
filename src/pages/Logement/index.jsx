import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useFetch } from "../../utils/hooks/index.jsx"
import Carousel from "../../components/Carrousel/index.jsx"
import { Message } from "../../utils/styles/Atoms.jsx"
import Tags from "../../components/Tags/index.jsx"
import Dropdown from "../../components/Dropdown/index.jsx"
import styled from "styled-components"
import TitreLogement from "../../components/TitreLogement/index.jsx"
import Host from "../../components/Host/index.jsx"
import calculClampValues from "../../utils/styles/calculClampValues.js"
import Note from "../../components/Note/index.jsx"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`
const Details = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    @media only screen and (max-width: 680px) {
        flex-direction: column;
    }
`
const DetailsBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const DetailsNoteEtHost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    @media only screen and (max-width: 680px) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }
`
const DropdownWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: ${calculClampValues(1440, 1000, 76, 30)};
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

function Logement() {
    const { idLogement } = useParams()
    const navigate = useNavigate()
    let { data: logement, isLoad, error } = useFetch("id/" + idLogement)

    useEffect(() => {
        console.log("uesEffect Logement : error = ", error)
        if (error) {
            navigate("/error")
        }
    }, [error, navigate])

    if (isLoad || error) return <Message>Chargement en cours...</Message>

    return (
        <Wrapper>
            <Carousel pictures={logement.pictures} />
            <Details>
                <DetailsBlock>
                    <TitreLogement
                        title={logement.title}
                        location={logement.location}
                    />
                    <Tags tags={logement.tags} />
                </DetailsBlock>
                <DetailsNoteEtHost>
                    <Host
                        name={logement.host.name}
                        picture={logement.host.picture}
                    />
                    <Note rating={logement.rating} />
                </DetailsNoteEtHost>
            </Details>
            <DropdownWrapper>
                <Dropdown
                    sujet="Description"
                    description={[logement.description]}
                />
                <Dropdown
                    sujet="Équipements"
                    description={logement.equipments}
                />
            </DropdownWrapper>
        </Wrapper>
    )
}

export default Logement
