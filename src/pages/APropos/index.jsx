import Bandeau from "../../components/Bandeau/index.jsx"
import imageMontagne from "../../assets/bandeau-montagne.jpg"

function APropos() {
    return (
        <Bandeau
            imageBG={imageMontagne}
            altImage="valée de haute montagne en-neigée"
        />
    )
}

export default APropos
