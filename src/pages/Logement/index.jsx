import { useParams } from "react-router-dom"
import { useFetch } from "../../utils/hooks/index.jsx"
import Error from "../../pages/Error/index.jsx"
import Carousel from "../../components/Carrousel/index.jsx"
import { Message } from "../../utils/styles/Atoms.jsx"
import Tags from "../../components/Tags/index.jsx"
import Dropdown from "../../components/Dropdown/index.jsx"
import styled from "styled-components"
import TitreLogement from "../../components/TitreLogement/index.jsx"
import Stars from "../../components/Stars/index.jsx"

const DropdownWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`

function Logement() {
    const { idLogement } = useParams()
    const resFetch = useFetch("id/" + idLogement)
    let { data: logement, isLoad, error } = resFetch
    console.log("resFetch", resFetch)
    if (!logement?.title) error = true

    if (isLoad) return <Message>Chargement en cours...</Message>

    if (error) return <Error />

    return (
        <Wrapper>
            <Carousel pictures={logement.pictures} />
            <TitreLogement
                title={logement.title}
                location={logement.location}
            />
            <Stars rating={logement.rating} />
            <Tags tags={logement.tags} />
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
