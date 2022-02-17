import React from 'react'

import UserDetail from './UserDetail'

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
    id: 2232,
    type: 'admin',
    name: 'Liza',
    email: 'admin.liza@ex.com'
  }
]

const OpenClosedPrinciple = () => {
  return (
    <ul>
      {
        users.map(({ id, name, type }: UserDetailProps) => (
          <UserDetail key={id} name={name} type={type} />
        ))
      }
    </ul>
  )
}

export default OpenClosedPrinciple