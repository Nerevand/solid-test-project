import { useEffect, useState } from "react";

const useGetRemoteData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json)
      })
  }, [])

  return { users }
}

export default useGetRemoteData