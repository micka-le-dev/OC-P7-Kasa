import Bandeau from "../../components/Bandeau/index.jsx"
import Galery from "../../components/Galery/index.jsx"

import imageBG from "../../assets/bandeau-accueil.jpg"

function Home() {
    return (
        <div>
            <Bandeau
                imageBG={imageBG}
                altImage="rochers avec arbres en bord de mer"
                text="Chez vous, partout et ailleurs"
            />
            <Galery />
        </div>
    )
}

export default Home
