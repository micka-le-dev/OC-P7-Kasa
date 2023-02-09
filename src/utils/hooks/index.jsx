import { useState, useEffect } from "react"

export function useFetch(urlAPI) {
    const [data, setData] = useState([])
    const [isLoad, setLoad] = useState(false)
    const [error, setError] = useState(false)

    async function fetchData(urlAPI) {
        setLoad(true)

        try {
            // mocks
            let id
            if (urlAPI.startsWith("id")) id = urlAPI.split("/")[1]
            urlAPI = "/mocks/logements.json"

            // get
            const response = await fetch(urlAPI)
            let data = await response.json()

            // mocks pour 1 logement
            if (id) data = data.find((logement) => logement.id === id)

            // dans tous les cas : mocked ou pas
            if (!data) throw new Error("Aucun logement avec cet id")
            setData(data)
        } catch (err) {
            console.error("fetchData", err)
            setError(true)
            setData(null)
        } finally {
            setLoad(false)
        }
    }

    useEffect(() => {
        if (!urlAPI) return
        fetchData(urlAPI)
    }, [urlAPI])
    return { data, isLoad, error }
}
