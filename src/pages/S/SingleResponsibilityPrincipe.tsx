import { useGetUsers } from '../../hooks'
import { UserProps } from '../../typedefs'

import UserDetail from './UserDetail'

export const SingleResponsibilityPrincipe = () => {
  const { users } = useGetUsers()
  return (
    <ul>
      {
        users.map((user: UserProps) => (
          <UserDetail key={user.id} {...user} />
        ))
      }
    </ul>
  )
}

export default SingleResponsibilityPrincipe