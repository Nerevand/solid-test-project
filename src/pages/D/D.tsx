import { useFetchData } from '../../hooks'
import { UserProps } from '../../typedefs'

const URL = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
  const users = useFetchData(URL)

  return <>
    <div> Users List</div>
    {users.map((user: UserProps) => <div>{user.name}</div>)}
  </>
}

export default Users