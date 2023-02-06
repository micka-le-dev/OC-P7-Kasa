import { useParams } from "react-router-dom"
import { useFetch } from "../../utils/hooks/index.jsx"
import Error from "../../pages/Error/index.jsx"

function Logement() {
    const { idLogement } = useParams()
    const { data: logement, error } = useFetch("id/" + idLogement)

    if (error) return <Error />

    return (
        <>
            <h1>Page logement {idLogement}</h1>
            <p>title : {logement.title}</p>
            <p>description : {logement.description}</p>
        </>
    )
}

export default Logement
