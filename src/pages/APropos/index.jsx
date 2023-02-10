import styled from "styled-components"
import imageMontagne from "../../assets/valee-de-montagne.jpg"
import Bandeau from "../../components/Bandeau/index.jsx"
import Dropdown from "../../components/Dropdown/index.jsx"

const WrapperDropdown = styled.section`
    margin: 33px auto;
    width: 100%;
    display: grid;
    justify-content: center;
    place-items: center;
    grid-template-columns: 1fr;
    gap: 33px;
`

function APropos() {
    return (
        <>
            <Bandeau
                imageBG={imageMontagne}
                altImage="valée de haute montagne en-neigée"
            />
            <WrapperDropdown>
                <Dropdown
                    isLarge={true}
                    sujet="Fiabilité"
                    description={[
                        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
                    ]}
                />
                <Dropdown
                    isLarge={true}
                    sujet="Respect"
                    description={[
                        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
                    ]}
                />
                <Dropdown
                    isLarge={true}
                    sujet="Service"
                    description={[
                        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
                    ]}
                />
                <Dropdown
                    isLarge={true}
                    sujet="Sécurité"
                    description={[
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
                    ]}
                />
            </WrapperDropdown>
        </>
    )
}

export default APropos
