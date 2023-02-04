// import d'un outils de débugage
import reportWebVitals from "./reportWebVitals"

// import des outils react
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import des pages
import Home from "./pages/Home/index"
import Logement from "./pages/Logement/index"
import Error from "./pages/Error/index"
import APropos from "./pages/APropos/index"

// vérifie la prise en compte de la mise à jour
console.log(
    "Page chargée le " +
        new Intl.DateTimeFormat("fr-FR", {
            dateStyle: "full",
            timeStyle: "long",
            timeZone: "Europe/Paris",
        }).format(new Date())
)

// application
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    </Router>
)

// débugage
reportWebVitals()
