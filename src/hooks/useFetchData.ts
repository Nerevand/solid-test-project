import { useState, useEffect } from "react"

const useFetch = (URL: string) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => setData(json))

  }, [])

  return data
}

export default useFetch