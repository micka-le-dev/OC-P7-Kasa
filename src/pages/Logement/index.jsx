import { useParams } from "react-router-dom"

function Logement() {
    const { idLogement } = useParams()
    return <h1>Page logement {idLogement}</h1>
}

export default Logement
