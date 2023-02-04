// import d'un outils de débugage
import reportWebVitals from "./reportWebVitals"

// import des outils react
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import des composants communs à toutes les pages
import Header from "./components/Header/index.jsx"
import Footer from "./components/Footer/index"

// import des pages
import Home from "./pages/Home/index"
import Logement from "./pages/Logement/index"
import Error from "./pages/Error/index"
import APropos from "./pages/APropos/index"

// import du style globale
import GlobalStyle from "./utils/styles/GlobalStyle.jsx"

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
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
)

// débugage
reportWebVitals()
