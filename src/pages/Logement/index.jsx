import { useParams } from "react-router-dom"
import { useFetch } from "../../utils/hooks/index.jsx"
import Error from "../../pages/Error/index.jsx"
import Carousel from "../../components/Carrousel/Carrousel.jsx"

function Logement() {
    const { idLogement } = useParams()
    const resFetch = useFetch("id/" + idLogement)
    const { data: logement, error } = resFetch
    console.log("resFetch", resFetch)

    if (error) return <Error />

    return (
        <>
            <Carousel pictures={logement?.pictures} />
            <h1>Page logement {idLogement}</h1>
            <p>title : {logement?.title}</p>
            <p>description : {logement?.description}</p>
        </>
    )
}

export default Logement
