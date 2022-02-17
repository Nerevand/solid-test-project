import React from 'react'

import UserDetail from './UserDetail'
import { ROLES } from './config'

export type UserDetailProps = {
  id: number,
  type: 'user' | 'admin',
  name: string
  email: string
}


const users: UserDetailProps[] = [
  {
    id: 1234,
    type: 'user',
    name: 'Bob',
    email: 'user.bob@ex.com'
  },
  {
    id: 5232,
    type: 'admin',
    name: 'Liza',
    email: 'admin.liza@ex.com'
  }
]

const OpenClosedPrinciple = () => {
  return (
    <ul>
      {
        users.map((user: UserDetailProps) => (
          <UserDetail key={user.id} {...user} />
        ))
      }
    </ul>
  )
}

export default OpenClosedPrinciple