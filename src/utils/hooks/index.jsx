import { useState, useEffect } from "react"

//mocks
import listLogementsMocked from "../../mocks/logements.json"

export function useFetch(urlAPI) {
    console.log("--------")
    const [data, setData] = useState([])
    const [isLoad, setLoad] = useState(true)
    const [error, setError] = useState(false)

    async function fetchData(urlAPI) {
        setLoad(true)

        function mokedFetch(urlAPI) {
            if (urlAPI.startsWith("id")) {
                const id = urlAPI.split("/")[1]
                const logement = listLogementsMocked.find(
                    (elem) => elem.id === id
                )
                console.log("mokedFetch : dataMocked id " + urlAPI, logement)
                if (logement?.id) return logement
                else throw new Error("Aucun logement avec cet id")
            } else {
                console.log(
                    "mokedFetch : dataMocked logements",
                    listLogementsMocked
                )
                return listLogementsMocked
            }
        }

        try {
            // Quand l'API sera dev
            // const response = await fetch(urlAPI)
            // const data = await response.json()

            // mocks
            const data = mokedFetch(urlAPI)

            // mocked ou pas
            setData(data)
        } catch (err) {
            console.error("fetchData", err)
            setError(true)
        } finally {
            setLoad(false)
        }
    }

    // fetchData(urlAPI)
    useEffect(() => {
        if (!urlAPI) return
        fetchData(urlAPI)
    }, [urlAPI])
    return { data, isLoad, error }
}
